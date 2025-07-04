import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
import { Pagination } from 'shared/types/pagination';

export interface ReportedReply {
  reportId: number;
  replyId: number;
  content: string;
  replyContent: string;
  username: string;
  reportDate: string;
}

export interface FetchGetReportedReplyListResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: ReportedReply[];
    number: number;
    sort: {
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    }[];
    pageable: Pagination;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
  message: string;
}

interface FetchGetReportedReplyListParams {
  page: number;
}

export const fetchGetReportedReplyList = async ({ page }: FetchGetReportedReplyListParams) => {
  const response = await axiosInstance.get<FetchGetReportedReplyListResponse>(
    URL.SERVERURL + URL.API.ADMIN.REPORT_REPLY_LIST,
    {
      params: { page },
    },
  );
  return response.data;
};
