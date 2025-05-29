import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostRemove = async (playlistId: string) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.PLAYLIST.REMOVE,
    params: { playlistId },
  });
  return response.data;
};
