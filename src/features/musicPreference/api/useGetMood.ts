import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
const GetMood = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MOODMODAL,
    params: {},
  });
  return response.data;
};

function useGetMood(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.MOODMODAL, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: GetMood,
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetMood };
