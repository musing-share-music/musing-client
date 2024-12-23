import { PlayListMusicInfo } from './PlayListMusicInfo';
import { Layout, LeftContainer, RightContainer } from './styled';

export const PlayListPage = () => {
  return (
    <Layout>
      <LeftContainer>
        {/* <MusicInfo /> */}
        <PlayListMusicInfo />
      </LeftContainer>
      <RightContainer>
        {/* <Contents />
        <ReviewForm />
        <ReviewList /> */}
      </RightContainer>
    </Layout>
  );
};
