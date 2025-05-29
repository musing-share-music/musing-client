import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostSave = async (listName: string, description: string) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.PLAYLIST.SAVE,
    params: { listName, description },
  });
  return response.data;
};
