import { Content, Notice } from 'entities/notice/model';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 공지사항 조회 request dto
export interface FetchGetNoticeDto {
  page?: number; // 페이지
}

// 공지사항 조회 response dto
interface FetchGetNoticeResponse {
  data: Notice;
  message: string;
}

// 공지사항 상세 조회 request dto
export interface FetchGetNoticeDetailDto {
  noticeId: number;
}

// 공지사항 검색 request dto
export interface FetchGetNoticeSearchDto {
  page?: number; // 페이지
  keyword?: string;
}

// 공지사항 상세 조회 response dto
interface FetchGetNoticeDetailResponse {
  data: Content;
  message: string;
}

// 공지사항 삭제 request dto
export interface FetchRemoveNoticeDto {
  noticeId: number;
}

interface FetchRemoveNoticeResponse {
  data: Content;
  message: string;
}

// 공지사항 업데이트 request dto
export interface FetchUpdateNoticeDto {
  noticeId: number;
  title: string;
  content: string;
  files?: File[];
  deleteFileLinks?: string[]; // 삭제할 파일 url
}

interface FetchUpdateNoticeResponse {
  data: Content;
  message: string;
}

export const fetchGetNotice = async ({ page = 1 }: FetchGetNoticeDto) => {
  const response = await axiosInstance.get<FetchGetNoticeResponse>(URL.API.NOTICE, {
    params: { page },
  });
  return response.data;
};

export const fetchGetNoticeDetail = async ({ noticeId }: FetchGetNoticeDetailDto) => {
  const response = await axiosInstance.get<FetchGetNoticeDetailResponse>(URL.API.NOTICE_DETAIL, {
    params: { noticeId },
  });
  return response.data;
};

export const fetchGetNoticeSearch = async ({ page = 1, keyword }: FetchGetNoticeSearchDto) => {
  const response = await axiosInstance.get<FetchGetNoticeResponse>(URL.API.NOTICE_SEARCH, {
    params: { page, keyword },
  });
  return response.data;
};

export const fetchRemoveNotice = async ({ noticeId }: FetchRemoveNoticeDto) => {
  const response = await axiosInstance.put<FetchRemoveNoticeResponse>(`${URL.API.ADMIN.DELETE_NOTICE}/${noticeId}`);
  return response.data;
};

export const fetchUpdateNotice = async ({ noticeId, ...body }: FetchUpdateNoticeDto) => {
  const formData = new FormData();

  formData.append(
    'requestDto',
    JSON.stringify({
      title: body.title,
      content: body.content,
    }),
  );
  body.files?.forEach((files) => {
    formData.append('files', files);
  });
  if (body.deleteFileLinks) {
    formData.append('deleteFileLinks', JSON.stringify(body.deleteFileLinks));
  }

  const response = await axiosInstance.put<FetchUpdateNoticeResponse>(`${URL.API.ADMIN.NOTICE}/${noticeId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
