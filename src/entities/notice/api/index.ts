import { Content, Notice } from 'entities/notice/model';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 공지사항 조회 request dto
export interface FetchGetNoticeRequestDto {
  page?: number; // 페이지
}

// 공지사항 조회 response dto
interface FetchGetNoticeResponseDto {
  data: Notice;
  message: string;
}

// 공지사항 상세 조회 request dto
export interface FetchGetNoticeDetailRequestDto {
  noticeId: number;
}

// 공지사항 상세 조회 response dto
interface FetchGetNoticeDetailResponseDto {
  data: Content;
  message: string;
}

export const fetchGetNotice = async ({ page = 1 }: FetchGetNoticeRequestDto) => {
  const response = await axiosInstance.get<FetchGetNoticeResponseDto>(URL.API.NOTICE, {
    params: { page },
  });
  return response.data;
};

export const fetchGetNoticeDetail = async ({ noticeId }: FetchGetNoticeDetailRequestDto) => {
  const response = await axiosInstance.get<FetchGetNoticeDetailResponseDto>(URL.API.NOTICE_DETAIL, {
    params: { noticeId },
  });
  return response.data;
};
