import { useQuery } from '@tanstack/react-query';

import { member } from 'entities/memberInfo/api/memberInfo.query';

function useGetWithDrawQuery(enabled = false, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...member.withDraw(),
    enabled: enabled,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetWithDrawQuery };
