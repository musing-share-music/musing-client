import { CommunityDetail } from 'entities/community/model/types';

import axiosInstance from 'shared/lib/axiosInstance';

export interface DeletePostDto {
  boardId: number;
}

interface DeletePostResponse {
  data: CommunityDetail;
  message: string;
}

export const fetchDeletePost = async ({ boardId }: DeletePostDto) => {
  const response = await axiosInstance.delete<DeletePostResponse>(`/musing/boards/deletePost?boardId=${boardId}`, {
    withCredentials: true,
  });

  return response.data;
};
