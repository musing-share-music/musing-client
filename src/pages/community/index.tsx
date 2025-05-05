import { useGetListQuery } from 'pages/community/lib/useGetListQuery';

import { Community } from 'entities/community/ui/';

import { Spinner } from 'shared/ui/Spinner';

const CommunityPage = () => {
  const { data, isLoading } = useGetListQuery();

  return isLoading ? <Spinner isLoading={isLoading}></Spinner> : data ? <Community communityData={data} /> : null;
};
export default CommunityPage;
