import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
import { Pagination } from 'shared/types/pagination';

export interface ReportedBoard {
  boardId: number;
  boardTitle: string;
  content: string;
  reportId: number;
  reportDate: string;
  username: string;
}

export interface FetchGetReportedBoardListResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: ReportedBoard[];
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

interface FetchGetReportedBoardListParams {
  page: number;
}

export const fetchGetReportedBoardList = async ({ page }: FetchGetReportedBoardListParams) => {
  const response = await axiosInstance.get<FetchGetReportedBoardListResponse>(
    URL.SERVERURL + URL.API.ADMIN.REPORT_BOARD_LIST,
    {
      params: { page },
    },
  );
  return response.data;
};
