import styled from '@emotion/styled';

import { CommunityItem } from 'entities/community/model/types';

import RecommendedPost from './RecommendedPost';
import RecommendedPostList from './RecommendedPostList';

interface CommunityItemProps {
  communityData: CommunityItem;
}

export const Community = ({ communityData }: CommunityItemProps) => {
  return (
    <MainContents>
      {communityData?.boardPopUpDto && <RecommendedPost boardPopUpDto={communityData?.boardPopUpDto}></RecommendedPost>}
      {communityData?.boardDtos && <RecommendedPostList boardDtos={communityData?.boardDtos}></RecommendedPostList>}
    </MainContents>
  );
};

const MainContents = styled.div`
  width: 100%;
`;
