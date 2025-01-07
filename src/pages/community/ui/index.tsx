import styled from '@emotion/styled';

import { COMMUNITY_ITEM } from './model';
import RecommendedPost from './RecommendedPost';
import RecommendedPostList from './RecommendedPostList';

export const Community = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  return (
    <MainContents>
      <RecommendedPost></RecommendedPost>
      <RecommendedPostList CommunityListInfo={COMMUNITY_ITEM.CommunityListInfo}></RecommendedPostList>
    </MainContents>
  );
};
