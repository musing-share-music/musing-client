import styled from '@emotion/styled';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { community } from 'entities/community/api/community.query';
import { ReviewForm } from 'entities/reply/ui/ReplyForm';

import { useUserInfoStore } from 'shared/store/userInfo';
import { SkeletonBox } from 'shared/ui';

import { AdminMenu } from './AdminMenu';
import { AnchorButton } from './AnchorButton';
import { Contents } from './Contents';
import { MusicInfo } from './MusicInfo';
import { ReviewList } from './ReviewList';
import { Layout, LeftContainer, RightContainer, Section, SectionTitle } from './styled';

export const DetailPage = () => {
  const params = useParams();
  const isAdmin = useUserInfoStore((state) => state.isAdmin);

  const boardId = Number(params.id);

  if (isNaN(boardId)) {
    throw new Error('잘못된 접근입니다.');
  }

  const { data } = useSuspenseQuery({
    ...community.detail(boardId),
    select(data) {
      return data.data;
    },
  });

  return (
    <Layout>
      <LeftContainer>
        <Suspense fallback={<LeftContainerSkeleton />}>
          <MusicInfo boardId={boardId} {...data} />
          <AdminMenu boardId={boardId} isAdmin={isAdmin()} />
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
    </Layout>
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
