import { CreateForm } from 'features/createPost/ui/CreateForm';

import { Container, Layout } from './ui/styled';

const Page = () => {
  return (
    <Layout>
      <Container>
        <CreateForm />
      </Container>
    </Layout>
  );
};

export default Page;
