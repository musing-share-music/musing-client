import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

interface FetchGetAdminInfoResponse {
  data: {
    userId: string;
    email: string;
    name: string;
    authority: string;
  };
  message: string;
}

export const fetchGetAdminInfo = async () => {
  const response = await axiosInstance<FetchGetAdminInfoResponse>({
    method: 'GET',
    url: URL.SERVERURL + URL.API.ADMIN.INFO,
    params: {},
  });
  return response.data;
};
