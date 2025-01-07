import styled from '@emotion/styled';

import { MAIN_ITEM } from 'pages/home/ui/model';

import { MemberReview } from './MemberReview';

export const MemberInfoReview = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberReview CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberReview>
    </MainContents>
  );
};
