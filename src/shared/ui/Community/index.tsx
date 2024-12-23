import styled from '@emotion/styled';

import { COMMUNITY_ITEM } from './constants';
import RecommendedPost from './RecommendedPost';
import RecommendedPostList from './RecommendedPostList';

export const Community = () => {
  const MainContents = styled.div`
    width: 100%;
  `;

  return (
    <MainContents>
      <RecommendedPost></RecommendedPost>
      <RecommendedPostList CommunityListInfo={COMMUNITY_ITEM.CommunityListInfo}></RecommendedPostList>
    </MainContents>
  );
};
