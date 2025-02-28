import { Reply, Sort, SortType } from 'entities/reply/model/type';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
import { Pagination } from 'shared/types/pagination';

export interface FetchGetReplyDto {
  boardId: number;
  sortType?: SortType;
  sort?: Sort;
  page?: number;
}

interface FetchGetReplyResponse extends Pagination {
  data: { content: Reply[] };
  message: string;
}

export const fetchGetReply = async ({ boardId, ...params }: FetchGetReplyDto) => {
  const response = await axiosInstance.get<FetchGetReplyResponse>(URL.API.REPLY(boardId), {
    params,
  });

  return response.data;
};
