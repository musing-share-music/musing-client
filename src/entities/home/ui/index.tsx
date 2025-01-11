import styled from '@emotion/styled';
// import { useEffect, useState } from 'react';

import { MAIN_ITEM } from 'entities/home/model/model';

import useNetworks from 'shared/hooks/useNetworkQuery';

import CommunityMusic from './CommunityMusic';
import GenreMusic from './GenreMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
import RecommendedMusic from './RecommendedMusic';
import ThumbnailMusic from './ThumbnailMusic';

export const Main = () => {
  const { useCustomQuery } = useNetworks();

  const { data, isLoading, error } = useCustomQuery(
    ['musing-main'], // 캐시를 위한 고유 키
    {
      method: 'get',
      url: 'musing/main',
      param: {},
    },
  );

  if (data?.success) {
    console.log(data.data);
  }

  if (isLoading) {
    console.log('로딩중');
  }

  if (error) {
    console.log(error);
  }

  return (
    <MainContents>
      <ComponentWrapper marginBottom={40}>
        <ThumbnailMusic />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={104}>
        <GenreMusic GenreMusicList={MAIN_ITEM.GenreMusicList} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={144}>
        <LikeMusic LikeMusicList={MAIN_ITEM.LikeMusicList} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={124}>
        <HotMusic HotMusicList={MAIN_ITEM.HotMusicList} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={120}>
        <CommunityMusic CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo} />
      </ComponentWrapper>

      <ComponentWrapper>
        <RecommendedMusic RecommendedMusicList={MAIN_ITEM.RecommendedMusicList} />
      </ComponentWrapper>
    </MainContents>
  );
};

//스타일링
const MainContents = styled.div`
  width: 100%;
  height: 2832px;
`;

const ComponentWrapper = styled.div<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
`;
