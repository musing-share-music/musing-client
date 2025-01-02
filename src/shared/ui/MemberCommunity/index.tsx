import styled from '@emotion/styled';

import { MAIN_ITEM } from 'shared/ui/Main/constants';

import { MemberCommunity } from './MemberCommunity';

export const MemberInfoCommunity = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberCommunity CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo}></MemberCommunity>
    </MainContents>
  );
};
