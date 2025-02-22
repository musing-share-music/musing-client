import { DeletePostResponseData } from 'entities/community/model/types';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export interface DeletePostDto {
  boardId: number;
}

interface DeletePostResponse {
  data: DeletePostResponseData;
  message: string;
}

export const fetchDeletePost = async ({ boardId }: DeletePostDto) => {
  const response = await axiosInstance.delete<DeletePostResponse>(`${URL.API.BOARD_DELETE}?boardId=${boardId}`, {
    withCredentials: true,
  });

  return response.data;
};
