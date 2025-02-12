import styled from '@emotion/styled';
import { useEffect } from 'react';

import GenreMusic from 'features/home/ui/GenreMusic';

import { MainItem } from 'entities/home/model/types';

import { useUserInfoStore } from 'shared/store/userInfo';

import CommunityMusic from './CommunityMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
import ThumbnailMusic from './ThumbnailMusic';
// import RecommendedMusic from './RecommendedMusic';

interface MainItemProps {
  MainData: MainItem;
}

export const Main = ({ MainData }: MainItemProps) => {
  const { setUser, setPassModal, isLogin } = useUserInfoStore();

  //메인홈
  useEffect(() => {
    if (MainData) {
      setPassModal(MainData.passModal);
    }

    //사용자정보 있으면 저장
    if (MainData.userInfoDto) {
      setUser(MainData.userInfoDto);
    }
  }, [MainData, setUser, setPassModal]);

  return (
    <MainContents>
      <ComponentWrapper marginBottom={40}>
        {MainData?.noticeDto ? <ThumbnailMusic noticeDto={MainData?.noticeDto} /> : null}
      </ComponentWrapper>

      {isLogin() && (
        <>
          <ComponentWrapper marginBottom={104}>
            {MainData?.genreMusics ? (
              <GenreMusic genreMusics={MainData?.genreMusics} likeGenre={MainData?.likeGenre} />
            ) : null}
          </ComponentWrapper>

          <ComponentWrapper marginBottom={144}>
            {MainData?.likeMusicDtos ? <LikeMusic likeMusicDtos={MainData?.likeMusicDtos} /> : null}
          </ComponentWrapper>
        </>
      )}

      <ComponentWrapper marginBottom={124}>
        {MainData?.recommendGenre ? (
          <HotMusic recommendGenre={MainData?.recommendGenre} recommendGenres={MainData?.recommendGenres} />
        ) : null}
      </ComponentWrapper>

      <ComponentWrapper marginBottom={120}>
        {MainData?.recentBoard ? (
          <CommunityMusic recentBoard={MainData?.recentBoard} hotMusicBoard={MainData.hotMusicBoard} />
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
