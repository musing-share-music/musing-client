import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchPostLogout = async () => {
  const response = await axiosInstance({
    method: 'Post',
    url: URL.SERVERURL + URL.API.LOGOUT,
    params: {},
  });
  return response.data;
};
