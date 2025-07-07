import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 동기화 API 호출
export const fetchPostSync = async (url: string) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.PLAYLIST.SYNC,
    params: { url },
  });
  return response.data;
}; 