import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostAddMusing = async (playlistId: string, musicUrl: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.PLAYLIST.ADD,
    params: { playlistId: playlistId, musicUrl: musicUrl },
  });
  return response.data;
};
