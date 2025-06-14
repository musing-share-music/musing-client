import { FetchPostReplyWriteDto, FetchPostReplyWriteResponse, Reply, Sort, SortType } from 'entities/reply/model/type';

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
  data: { content: Reply[]; totalElements: number };
  message: string;
}

export const fetchGetReply = async ({ boardId, ...params }: FetchGetReplyDto) => {
  const response = await axiosInstance.get<FetchGetReplyResponse>(URL.API.REPLY(boardId), {
    params,
  });

  return response.data;
};

// 리뷰 작성
export const fetchPostReplyWrite = async (params: FetchPostReplyWriteDto) => {
  const response = await axiosInstance.post<FetchPostReplyWriteResponse>(URL.API.REPLY_WRITE, null, {
    params: {
      boardId: params.boardId,
      content: params.replyDto.content,
      starScore: params.replyDto.starScore,
    },
  });

  return response.data;
};

// 리뷰 수정
export const fetchModifyReply = async ({
  replyId,
  starScore,
  content,
}: {
  replyId: number;
  starScore: number;
  content: string;
}) => {
  const response = await axiosInstance.put<Reply>(URL.API.REPLY_MODIFY, null, {
    params: {
      replyId,
      starScore,
      content,
    },
  });
  return response.data;
};

// 리뷰 삭제
export const fetchDeleteReply = async (replyId: number) => {
  const response = await axiosInstance.delete<Reply>(URL.API.REPLY_DELETE, {
    params: {
      replyId,
    },
  });

  return response.data;
};
