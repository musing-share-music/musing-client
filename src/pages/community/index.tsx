import { useGetListQuery } from 'pages/community/lib/useGetListQuery';

import { MainLayout } from 'widgets/ui/';

import { Community } from 'entities/community/ui/';

import { Spinner } from 'shared/ui/Spinner';

const CommunityPage = () => {
  const { data, isLoading } = useGetListQuery();

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <MainLayout>{data ? <Community communityData={data} /> : null}</MainLayout>
  );
};
export default CommunityPage;
