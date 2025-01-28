import axios from 'axios';

import URL from 'shared/config/urls';

export interface DeletePostDto {
  boardId: number;
}

// TODO 공통 instance로 개선
const instance = axios.create({
  baseURL: URL.SERVERURL,
  timeout: 5000, // 임의로 지정
});

export const fetchDeletePost = async ({ boardId }: DeletePostDto) => {
  const response = await instance.delete(`/musing/boards/deletePost?boardId=${boardId}`, {
    withCredentials: true,
  });

  return response.data;
};
