import styled from '@emotion/styled';

import { MemberReview } from './MemberReview';

export const MemberInfoReview = () => {
  return (
    <MainContents>
      <MemberReview></MemberReview>
    </MainContents>
  );
};

const MainContents = styled.div`
  width: 100%;
  height: 2832px;
`;
