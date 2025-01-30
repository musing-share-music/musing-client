import styled from '@emotion/styled';

import { MAIN_ITEM } from 'entities/home/model/model';

import { MemberReview } from './MemberReview';

export const MemberInfoReview = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberReview recentBoard={MAIN_ITEM.recentBoard}></MemberReview>
    </MainContents>
  );
};
