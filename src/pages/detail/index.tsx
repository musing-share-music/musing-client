import { useParams } from 'react-router-dom';

import { MainLayout } from 'shared/ui';
import { DetailPage } from 'shared/ui/Detail';

const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const params = useParams();

  return (
    <MainLayout>
      <DetailPage />
    </MainLayout>
  );
};

export default Page;
