import styled from '@emotion/styled';

import { MAIN_ITEM } from 'entities/home/model/model';

import { MemberCommunity } from './MemberCommunity';

export const MemberInfoCommunity = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberCommunity recentBoard={MAIN_ITEM.recentBoard}></MemberCommunity>
    </MainContents>
  );
};
