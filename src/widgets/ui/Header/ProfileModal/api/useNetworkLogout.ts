import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

// 메인데이터 호출
const fetchLogout = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LOGOUT,
    params: {},
  });
  return response.data;
};

function useNetworkLogout(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.LOGOUT, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: fetchLogout,
    retry: 3,
    ...queryConfig,
  });

  return [data, error, isLoading];
}

export { useNetworkLogout };
