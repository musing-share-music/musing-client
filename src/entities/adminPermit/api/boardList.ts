import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

import { FetchGetBoardListResponse } from '../model/types';

interface FetchGetBoardListDto {
  page?: number;
}

interface FetchPermitBoardStateDto {
  boardId: number;
}

interface FetchRejectBoardStateDto {
  boardId: number;
}

/**
 * 승인 대기 게시글 목록 조회
 */
export const fetchGetBoardList = async ({ page }: FetchGetBoardListDto) => {
  const response = await axiosInstance<FetchGetBoardListResponse>({
    method: 'GET',
    url: URL.API.ADMIN.PERMIT_BOARD_LIST,
    params: { page },
  });
  return response.data;
};

/**
 * 게시글 승인
 */
export const fetchPermitBoardState = async ({ boardId }: FetchPermitBoardStateDto) => {
  const response = await axiosInstance({
    method: 'PUT',
    url: URL.API.ADMIN.PERMIT_BOARD,
    params: { boardId },
  });
  return response.data;
};

/**
 * 게시글 승인 거절
 */
export const fetchRejectBoardState = async (id: FetchRejectBoardStateDto) => {
  const response = await axiosInstance({
    method: 'PUT',
    url: URL.API.ADMIN.REJECT_BOARD,
    params: { id },
  });
  return response.data;
};
