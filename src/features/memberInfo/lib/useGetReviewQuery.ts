import { useQuery } from '@tanstack/react-query';

import { member } from 'entities/memberInfo/api/memberInfo.query';

function useGetReviewQuery(page?: number, sort?: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...member.review(page || 0, sort || 'DESC'),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetReviewQuery };
