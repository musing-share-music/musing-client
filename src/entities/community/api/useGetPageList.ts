import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

// 메인데이터 호출
const GetPageList = async (page: number) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LISTPAGE,
    params: { page },
  });
  return response.data;
};

function useGetPageList(page?: number, queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.LISTPAGE, params: { page } }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => (page ? GetPageList(page) : Promise.resolve(null)),
    enabled: !!page,
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetPageList };
