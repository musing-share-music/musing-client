import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostModify = async (playlistId: string, deleteVideoLinks: string) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.PLAYLIST.MODIFY,
    params: { playlistId, deleteVideoLinks },
  });
  return response.data;
};
