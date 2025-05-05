import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
export const fetchGetPlayList = async (title: string, content: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.LIST,
    params: {
      title: title,
      content: content,
    },
  });
  return response.data;
};
