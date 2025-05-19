import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetPlayListDetail = async (playlistId: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.DETAIL,
    params: { listId: playlistId },
  });
  return response.data;
};
