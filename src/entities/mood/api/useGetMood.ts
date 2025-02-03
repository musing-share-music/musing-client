import { useQuery } from '@tanstack/react-query';

import { Mood } from 'entities/mood/model/mood';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

interface GetMoodResponse {
  data: Mood[];
  message: string;
}

// 분위기 태그 데이터
const getMood = async () => {
  const response = await axiosInstance<GetMoodResponse>({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MOODMODAL,
  });
  return response.data;
};

function useGetMood(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.MOODMODAL, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: getMood,
    retry: 3,
    staleTime: Infinity, // 정적 데이터이므로 infinity로 설정
    select(data) {
      return data.data;
    },
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetMood };
