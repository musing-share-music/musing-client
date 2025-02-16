import { ReviewForm } from 'entities/reply/ui/ReplyForm';

import { Contents } from './Contents';
import { ReviewList } from './ReviewList';
import { Layout, RightContainer, Section, SectionTitle } from './styled';

export const DetailPage = () => {
  return (
    <Layout>
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
