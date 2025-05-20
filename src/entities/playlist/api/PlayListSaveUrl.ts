import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostSaveUrl = async (url: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.SAVEURL,
    params: { url: url },
  });
  return response.data;
};
