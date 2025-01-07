import styled from '@emotion/styled';

import { MAIN_ITEM } from 'pages/home/ui/model';

import { MemberCommunity } from './MemberCommunity';
import { MemberPreference } from './MemberPreference';
import { MemberReviewList } from './MemberReviewList';

export const MemberInfoPage = () => {
  const MainContents = styled.div`
    width: 100%;
  `;

  return (
    <MainContents>
      <MemberPreference onConfirm={function (): void {}}></MemberPreference>
      <MemberCommunity CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberCommunity>
      <MemberReviewList CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberReviewList>
    </MainContents>
  );
};
