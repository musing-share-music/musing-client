import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchGetPlayList = async (url: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.LIST,
    params: { url: url },
    // headers: {
    //   Authorization: 'Bearer ${token}',
    // },
  });
  return response.data;
};
