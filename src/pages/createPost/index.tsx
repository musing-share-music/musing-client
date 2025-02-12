import { MainLayout } from 'widgets/ui/Layout';

import { CreateForm } from 'entities/community/ui/CreateForm';

import { Container, Layout } from './ui/styled';

const Page = () => {
  return (
    <MainLayout>
      <Layout>
        <Container>
          <CreateForm />
        </Container>
      </Layout>
    </MainLayout>
  );
};

export default Page;
