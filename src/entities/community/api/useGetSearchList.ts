import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

// 메인데이터 호출
const GetSearchList = async (option: string, page: number, keyword: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LISTSEARCH,
    params: { searchType: option, page: page, keyword: keyword },
  });
  return response.data;
};

function useGetSearchList(option: string, page: number, keyword: string, queryConfig = {}) {
  const queryKey = [
    'network',
    {
      method: 'GET',
      url: URL.SERVERURL + URL.API.LISTSEARCH,
      params: { searchType: option, page: page, keyword: keyword },
    },
  ];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => GetSearchList(option, page, keyword),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetSearchList };
