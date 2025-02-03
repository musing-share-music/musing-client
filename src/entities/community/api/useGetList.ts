import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

// 메인데이터 호출
const GetList = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LIST,
    params: {},
  });
  return response.data;
};

function useGetList(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.LIST, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: GetList,
    retry: 3,
    ...queryConfig,
  });

  return [data, error, isLoading];
}

export { useGetList };
