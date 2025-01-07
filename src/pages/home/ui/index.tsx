import styled from '@emotion/styled';

import CommunityMusic from './CommunityMusic';
import GenreMusic from './GenreMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
import { MAIN_ITEM } from './model';
import RecommendedMusic from './RecommendedMusic';

export const Main = () => {
  const MainContents = styled.div`
    width: 100%;
    height: 2832px;
  `;

  const ComponentWrapper = styled.div<{ marginBottom?: number }>`
    margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
  `;

  return (
    <MainContents>
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
