import { useGetMemberInfoQuery } from 'pages/memberInfo/lib/useGetMemberInfoQuery';

import { MainLayout } from 'widgets/ui/Layout';

import { MemberInfoPage } from 'entities/memberInfo/ui/member';

import { Spinner } from 'shared/ui/Spinner';

const MemberInfo = () => {
  const { data, isLoading } = useGetMemberInfoQuery();

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <MainLayout>{data ? <MemberInfoPage memberInfo={data} /> : null}</MainLayout>
  );
};

export default MemberInfo;
