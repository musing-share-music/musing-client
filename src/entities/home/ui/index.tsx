import styled from '@emotion/styled';
import { useEffect } from 'react';

import GenreMusic from 'features/home/ui/GenreMusic';

import { MainItem } from 'entities/home/model/types';

import { useUserInfoStore } from 'shared/store/userInfo';
// import { CreatePlayListModal } from 'shared/ui/Modal/PlayListModal/CreatePlayList';
// import { PersistPlayListModal } from 'shared/ui/Modal/PlayListModal/PersistPlayList';
// import { AddPlayListModal } from 'shared/ui/Modal/PlayListModal/AddPlayList';

import CommunityMusic from './CommunityMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
import ThumbnailMusic from './ThumbnailMusic';
// import RecommendedMusic from './RecommendedMusic';

interface MainItemProps {
  mainData: MainItem;
}

export const Main = ({ mainData }: MainItemProps) => {
  const { setUser, setPassModal, isLogin } = useUserInfoStore();

  //메인홈
  useEffect(() => {
    if (mainData) {
      setPassModal(mainData.passModal);
    }

    //사용자정보 있으면 저장
    if (mainData.userInfoDto) {
      setUser(mainData.userInfoDto);
    }
  }, [mainData, setUser, setPassModal]);

  return (
    <MainContents>
      {/* <AddPlayListModal
        open={true}
        children={undefined}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></AddPlayListModal> */}
      <ComponentWrapper marginBottom={40}>
        {mainData?.noticeDto ? <ThumbnailMusic noticeDto={mainData?.noticeDto} /> : null}
      </ComponentWrapper>

      {isLogin() && (
        <>
          <ComponentWrapper marginBottom={104}>
            {mainData?.genreMusics && mainData?.likeGenre ? (
              <GenreMusic genreMusics={mainData?.genreMusics} likeGenre={mainData?.likeGenre} />
            ) : null}
          </ComponentWrapper>

          <ComponentWrapper marginBottom={144}>
            {mainData?.likeMusicDtos ? <LikeMusic likeMusicDtos={mainData?.likeMusicDtos} /> : null}
          </ComponentWrapper>
        </>
      )}

      <ComponentWrapper marginBottom={124}>
        {mainData?.recommendGenre && mainData?.recommendGenres ? (
          <HotMusic recommendGenre={mainData?.recommendGenre} recommendGenres={mainData?.recommendGenres} />
        ) : null}
      </ComponentWrapper>

      <ComponentWrapper marginBottom={120}>
        {mainData?.recentBoard && mainData?.hotMusicBoard ? (
          <CommunityMusic recentBoard={mainData?.recentBoard} hotMusicBoard={mainData.hotMusicBoard} />
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
  min-height: 1800px;
`;

const ComponentWrapper = styled.div<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
`;
