import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetPlayList = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.LIST,
  });
  return response.data;
};
