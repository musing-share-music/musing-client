import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { startTransition, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ANCHOR_REVIEW } from 'pages/detail/config/anchor';
import { REVIEW_FILTER_OPTIONS } from 'pages/detail/config/filterOption';

import { fetchGetReply } from 'entities/reply/api';
import { reply } from 'entities/reply/api/reply.queries';
import { Sort, SortType } from 'entities/reply/model/type';
import { Reply } from 'entities/reply/ui/Reply';

import { Filter, SkeletonBox } from 'shared/ui/';

// TODO 리뷰 무한 스크롤
export const ReviewList = () => {
  const params = useParams();
  const [sortType, setSortType] = useState<SortType>();
  const [sort, setSort] = useState<Sort>();
  const [page, setPage] = useState(1);

  const boardId = Number(params.id);

  // 게시글 댓글
  const { queryKey } = reply.list({ boardId, sortType, sort, page });
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryFn: () => fetchGetReply({ boardId, sortType, sort, page }), // 현재 query key factory가 react query v5에 맞지 않아서 에러 발생
    queryKey,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.totalElements + 1;
      if (nextPage <= lastPage.totalPages) {
        setPage(nextPage);
        return nextPage;
      }
    },
    initialPageParam: 1,
  });

  const handleChangeSortType = (value: { sortType: SortType; sort: Sort }) => {
    startTransition(() => {
      setSortType(value.sortType);
      setSort(value.sort);
    });
  };

  if (isLoading) {
    <Section>
      <Skeleton />
    </Section>;
  }

  const content = data?.pages[0].data?.content || [];

  return (
    <Section>
      <SectionTitle>
        별점 및 리뷰({content.length})
        <Filter
          placeholder={REVIEW_FILTER_OPTIONS[0].label}
          options={REVIEW_FILTER_OPTIONS}
          onChange={(option) => handleChangeSortType(option.value)}
        />
      </SectionTitle>
      <ReplyList id={ANCHOR_REVIEW}>
        <Reply comments={content} />
      </ReplyList>

      {hasNextPage && <button onClick={() => fetchNextPage()}>다음 페이지 보기</button>}
      {isFetchingNextPage && <>로딩중...</>}
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
  flex-direction: column;
  gap: 48px;
`;
