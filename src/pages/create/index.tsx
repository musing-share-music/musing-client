import { MainLayout } from 'widgets/ui/Layout';

import { MusicRecommendationForm } from 'features/musicRecommendationBoard/ui/MusicRecommendationForm';

import { Container, Layout } from './ui/styled';

const Page = () => {
  return (
    <MainLayout>
      <Layout>
        <Container>
          <MusicRecommendationForm />
        </Container>
      </Layout>
    </MainLayout>
  );
};

export default Page;
