import { BoardDetailDto } from 'entities/community/model/types';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetBoardDetail = async (boardId: number) => {
  const response = await axiosInstance.get<BoardDetailDto>(URL.API.BOARD_DETAIL, {
    params: { boardId },
  });
  return response.data;
};
