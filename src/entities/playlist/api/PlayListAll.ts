import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetPlayListAll = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.LISTALL,
  });
  return response.data;
};
