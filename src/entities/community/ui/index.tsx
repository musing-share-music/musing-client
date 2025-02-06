import styled from '@emotion/styled';

import { useGetList } from 'entities/community/api/useGetList';

import { Spinner } from 'shared/ui/Spinner';

import RecommendedPost from './RecommendedPost';
import RecommendedPostList from './RecommendedPostList';

export const Community = () => {
  const [data, isLoading] = useGetList();

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <MainContents>
      {data?.data?.boardPopUpDto && <RecommendedPost boardPopUpDto={data?.data?.boardPopUpDto}></RecommendedPost>}
      {data?.data?.boardDtos && <RecommendedPostList boardDtos={data?.data?.boardDtos}></RecommendedPostList>}
    </MainContents>
  );
};

const MainContents = styled.div`
  width: 100%;
  height: 2832px;
`;
