import styled from '@emotion/styled';

import { MemberCommunity } from './MemberCommunity';

export const MemberInfoCommunity = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <MemberCommunity></MemberCommunity>
    </MainContents>
  );
};
