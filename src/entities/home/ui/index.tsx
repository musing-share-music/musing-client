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
  const { setUser, setPassModal, isLogin } = useUserInfoStore();
  const [data, isLoading] = useNetworkMain();

  //메인홈
  useEffect(() => {
    if (data?.data) {
      setPassModal(data.data.passModal);
    }

    //사용자정보 있으면 저장
    if (data?.data?.userInfoDto) {
      setUser(data.data.userInfoDto);
    }
  }, [data, setUser, setPassModal]);

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <MainContents>
      <ComponentWrapper marginBottom={40}>
        {data?.data?.noticeDto ? <ThumbnailMusic noticeDto={data?.data?.noticeDto} /> : null}
      </ComponentWrapper>

      {isLogin() && (
        <>
          <ComponentWrapper marginBottom={104}>
            {data?.data?.genreMusics ? (
              <GenreMusic genreMusics={data?.data?.genreMusics} likeGenre={data?.data?.likeGenre} />
            ) : null}
          </ComponentWrapper>

          <ComponentWrapper marginBottom={144}>
            {data?.data?.likeMusicDtos ? <LikeMusic likeMusicDtos={data?.data?.likeMusicDtos} /> : null}
          </ComponentWrapper>
        </>
      )}

      <ComponentWrapper marginBottom={124}>
        {data?.data?.recommendGenre ? (
          <HotMusic recommendGenre={data?.data?.recommendGenre} recommendGenres={data?.data?.recommendGenres} />
        ) : null}
      </ComponentWrapper>

      <ComponentWrapper marginBottom={120}>
        {data?.data?.recentBoard ? (
          <CommunityMusic recentBoard={data?.data?.recentBoard} hotMusicBoard={data.data.hotMusicBoard} />
        ) : null}
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
