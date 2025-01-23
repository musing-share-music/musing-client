import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useNetworkMain } from 'entities/home/api/useNetworkMain';

import { useUserInfoStore } from 'shared/store/userInfo';
import { Spinner } from 'shared/ui/Spinner';

import CommunityMusic from './CommunityMusic';
import GenreMusic from './GenreMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
// import RecommendedMusic from './RecommendedMusic';
import ThumbnailMusic from './ThumbnailMusic';

export const Main = () => {
  const { setUser, isAdmin, userInfo } = useUserInfoStore();
  const [data, error, isLoading] = useNetworkMain();

  useEffect(() => {
    if (data?.data?.userInfoDto) {
      setUser(data.data.userInfoDto);
    }

    console.log(isAdmin());
    console.log(userInfo);
  }, [data, setUser]);

  if (error) {
    console.log(error);
  }

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <MainContents>
      <ComponentWrapper marginBottom={40}>
        <ThumbnailMusic noticeDto={data?.data?.noticeDto} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={104}>
        <GenreMusic genreMusics={data?.data?.genreMusics} likeGenre={data?.data?.likeGenre} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={144}>
        <LikeMusic likeMusicDtos={data?.data?.likeMusicDtos} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={124}>
        <HotMusic recommendGenre={data?.data?.recommendGenre} recommendGenres={data?.data?.recommendGenres} />
      </ComponentWrapper>

      <ComponentWrapper marginBottom={120}>
        <CommunityMusic recentBoard={data.data.recentBoard} hotMusicBoard={data.data.hotMusicBoard} />
      </ComponentWrapper>

      {/* <ComponentWrapper>
        <RecommendedMusic RecommendedMusicList={MAIN_ITEM.RecommendedMusicList} />
      </ComponentWrapper> */}
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
