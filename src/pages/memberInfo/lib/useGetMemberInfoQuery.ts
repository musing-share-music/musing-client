import { useQuery } from '@tanstack/react-query';

import { member } from 'entities/memberInfo/api/memberInfo.query';

function useGetMemberInfoQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    // select: (data) => data.data,
    ...member.info(),
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetMemberInfoQuery };
