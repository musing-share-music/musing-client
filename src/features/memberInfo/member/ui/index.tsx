import styled from '@emotion/styled';

import { MAIN_ITEM } from 'entities/home/model/model';

import { MemberCommunity } from './MemberCommunity';
import { MemberPreference } from './MemberPreference';
import { MemberReviewList } from './MemberReviewList';

export const MemberInfoPage = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberPreference onConfirm={function (): void {}}></MemberPreference>
      <MemberCommunity CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberCommunity>
      <MemberReviewList CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberReviewList>
    </MainContents>
  );
};
