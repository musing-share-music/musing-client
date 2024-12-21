import styled from '@emotion/styled';

import RecommendedPost from './RecommendedPost';
import RecommendedPostList from './RecommendedPostList';
// import { MAIN_ITEM } from './constants';

export const Community = () => {
  const MainContents = styled.div`
    width: 100%;
  `;

  return (
    <MainContents>
      <RecommendedPost></RecommendedPost>
      <RecommendedPostList></RecommendedPostList>
    </MainContents>
  );
};
