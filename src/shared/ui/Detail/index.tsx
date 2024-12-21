import { AnchorButton } from './AnchorButton';
import { Contents } from './Contents';
import { MusicInfo } from './MusicInfo';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { Layout, LeftContainer, RightContainer } from './styled';

export const DetailPage = () => {
  return (
    <Layout>
      <LeftContainer>
        <MusicInfo />
        <AnchorButton />
      </LeftContainer>
      <RightContainer>
        <Contents />
        <ReviewForm />
        <ReviewList />
      </RightContainer>
    </Layout>
  );
};
