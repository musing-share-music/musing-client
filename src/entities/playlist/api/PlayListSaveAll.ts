import { SavePlayListPayload } from 'entities/playlist/type';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 플레이리스트 호출
export const fetchPostSaveAll = async (payload: SavePlayListPayload) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.PLAYLIST.SAVEALL,
    data: payload,
  });

  return response.data;
};
