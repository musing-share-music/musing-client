import styled from '@emotion/styled';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { AnchorButton } from 'pages/detail/ui/AnchorButton';
import { ReviewList } from 'pages/detail/ui/ReviewList';

import { AdminLayout } from 'widgets/ui';
import { MusicInfo } from 'widgets/ui/MusicInfo';

import { adminDeletedBoardList } from 'entities/adminDeleted/api/adminDeleted.query';
import { ReviewForm } from 'entities/reply/ui/ReplyForm';

import { SkeletonBox } from 'shared/ui';

import { Contents } from './Contents';

export const AdminDeletedBoardDetailPage = () => {
  const params = useParams();

  const boardId = Number(params.id);

  if (isNaN(boardId)) {
    throw new Error('잘못된 접근입니다.');
  }

  const { data } = useSuspenseQuery({
    ...adminDeletedBoardList.detail(boardId),
    select(data) {
      return data.data;
    },
  });

  return (
    <AdminLayout>
      <LeftContainer>
        <Suspense fallback={<LeftContainerSkeleton />}>
          <MusicInfo boardId={boardId} {...data} />
          <AnchorButton />
        </Suspense>
      </LeftContainer>
      <RightContainer>
        <Suspense fallback={<RightContainerSkeleton />}>
          <Contents {...data} />
        </Suspense>
        <Section>
          <SectionTitle>리뷰 작성</SectionTitle>
          <ReviewForm />
        </Section>
        <ReviewList />
      </RightContainer>
    </AdminLayout>
  );
};

const LeftContainerSkeleton = () => {
  return (
    <>
      <LeftSkeletonContainer>
        <SkeletonBox height={300} />
        <SkeletonBox height={20} />
        <SkeletonBox height={20} />
        <SkeletonBox height={60} />
      </LeftSkeletonContainer>
    </>
  );
};
const RightContainerSkeleton = () => {
  return (
    <RightSkeletonContainer>
      <RightSkeltonHeader>
        <SkeletonBox height={40} />
        <SkeletonBox height={40} />
      </RightSkeltonHeader>
      <RightSkeletonBody>
        <SkeletonBox height={400} />
      </RightSkeletonBody>
    </RightSkeletonContainer>
  );
};

const LeftSkeletonContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  gap: 20px;
  top: 24px;
  width: 100%;
  padding: 24px 24px 26px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

const RightSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 48px 52px 48px;
  background: ${({ theme }) => theme.colors[700]};
`;

const RightSkeltonHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightSkeletonBody = styled.div`
  margin-top: 32px;
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors[700]};
`;

const LeftContainer = styled.div`
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 336px;
  min-width: 336px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 840px;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
