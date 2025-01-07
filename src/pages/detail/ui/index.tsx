import { ReviewForm } from 'features/reviewComments/ui/ReviewForm';

import { Contents } from './Contents';
import { MusicInfo } from './MusicInfo';
import { ReviewList } from './ReviewList';
import { Layout, LeftContainer, RightContainer, Section, SectionTitle } from './styled';

export const DetailPage = () => {
  return (
    <Layout>
      <LeftContainer>
        <MusicInfo />
      </LeftContainer>
      <RightContainer>
        <Contents />
        <Section>
          <SectionTitle>리뷰 작성</SectionTitle>
          <ReviewForm />
        </Section>
        <ReviewList />
      </RightContainer>
    </Layout>
  );
};
