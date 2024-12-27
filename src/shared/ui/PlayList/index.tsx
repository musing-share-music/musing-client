import { PlayListMusicInfo } from './PlayListMusicInfo';
import { PlayListMusicList } from './PlayListMusicList';
import { Layout, LeftContainer, RightContainer } from './styled';

export const PlayListPage = () => {
  return (
    <Layout>
      <LeftContainer>
        <PlayListMusicInfo />
      </LeftContainer>
      <RightContainer>
        <PlayListMusicList></PlayListMusicList>
      </RightContainer>
    </Layout>
  );
};
