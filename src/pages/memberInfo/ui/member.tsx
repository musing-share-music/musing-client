import { useGetMemberInfoQuery } from 'pages/memberInfo/lib/useGetMemberInfoQuery';

import { MemberInfoPage } from 'entities/memberInfo/ui/member';

import { Spinner } from 'shared/ui/Spinner';

const MemberInfo = () => {
  const { data, isLoading } = useGetMemberInfoQuery();

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <>{data ? <MemberInfoPage memberInfo={data} /> : null}</>
  );
};

export default MemberInfo;
