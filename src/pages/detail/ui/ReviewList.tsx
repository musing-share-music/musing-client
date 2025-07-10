import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { startTransition, useCallback, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ANCHOR_REVIEW } from 'pages/detail/config/anchor';
import { REVIEW_FILTER_OPTIONS } from 'pages/detail/config/filterOption';

import { fetchGetReply } from 'entities/reply/api';
import { reply, useDeleteReplyMutation, useModifyReplyMutation } from 'entities/reply/api/reply.queries';
import { Sort, SortType } from 'entities/reply/model/type';
import { Reply } from 'entities/reply/ui/Reply';

import { Filter, SkeletonBox } from 'shared/ui/';

export const ReviewList = () => {
  const params = useParams();
  const [sortType, setSortType] = useState<SortType>();
  const [sort, setSort] = useState<Sort>();
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(REVIEW_FILTER_OPTIONS[0]);

  const boardId = Number(params.id);
  const { queryKey } = reply.list({ boardId, sortType, sort, page });

  const deleteReplyMutation = useDeleteReplyMutation(boardId);
  const modifyReplyMutation = useModifyReplyMutation(boardId);

  const handleDeleteReply = (replyId: number) => {
    deleteReplyMutation.mutate(replyId);
  };

  const handleModifyReply = (replyId: number, content: string, starScore: number) => {
    void modifyReplyMutation.mutate({ replyId, content, starScore });
  };

  // 게시글 댓글
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, isError } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      fetchGetReply({
        boardId,
        sortType,
        sort,
        page: pageParam,
      }),
    queryKey,
    getNextPageParam: (lastPage, allPages) => {
      const currentTotal = allPages.reduce((acc, page) => acc + page.data.content.length, 0);
      return currentTotal < lastPage.data.totalElements ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const handleChangeSortType = (value: { sortType: SortType; sort: Sort }) => {
    startTransition(() => {
      setSortType(value.sortType);
      setSort(value.sort);
      setPage(1);
    });
  };

  const handleFilterChange = (option: { label: string; value: { sortType: SortType; sort: Sort } }) => {
    setSelectedFilter(option);
    handleChangeSortType(option.value);
  };

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 페이지 하단에서 500px 이전에 도달하면 다음 페이지 로드 
    if (scrollHeight - scrollTop <= clientHeight + 500) {
      if (hasNextPage && !isFetchingNextPage) {
        void fetchNextPage();
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const loaderRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: '200px' } // 미리 로드
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <Section>
        <Skeleton />
      </Section>
    );
  }

  const allReviews = data?.pages.flatMap((page) => page.data.content) || [];

  return (
    <Section>
      <SectionTitle>
        별점 및 리뷰({data?.pages[0].data.totalElements})
        <Filter
          placeholder={selectedFilter.label}
          options={REVIEW_FILTER_OPTIONS}
          onChange={handleFilterChange}
          defaultValue={selectedFilter}
        />
      </SectionTitle>
      <ReplyList id={ANCHOR_REVIEW}>
        <Reply comments={allReviews} onDeleteReply={handleDeleteReply} onModifyReply={handleModifyReply} />
        <div ref={loaderRef} />
        {isFetchingNextPage && (
          <LoadingContainer>
            <Skeleton />
          </LoadingContainer>
        )}
        {isError && <div>리뷰를 불러오는 중 오류가 발생했습니다.</div>}
      </ReplyList>
    </Section>
  );
};

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonTitle>
        <SkeletonBox width={150} height={25} />
        <SkeletonBox width={150} height={25} />
      </SkeletonTitle>
      <SkeletonBox height={25} />
      <SkeletonBox height={25} />
    </SkeletonContainer>
  );
};

const LoadingContainer = styled.div`
  padding: 20px 0;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  padding: 0 32px;
`;

const SkeletonTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors[700]};
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;

const ReplyList = styled.div`
  width: 100%;
  display: flex;
  padding: 32px;
  padding-bottom: 100px;
  flex-direction: column;
  gap: 48px;
`;
