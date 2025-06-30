import { useMutation } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export interface ReportBoardRequest {
  boardId: number;
  content: string;
}

interface ReportBoardResponse {
  message: string;
}

const reportBoard = async ({ boardId, content }: ReportBoardRequest) => {
  const response = await axiosInstance.post<ReportBoardResponse>(
    URL.SERVERURL + URL.API.REPORT_BOARD,
    null,
    {
      params: {
        boardId,
        content,
      },
    }
  );
  return response.data;
};

export function useReportBoard() {
  return useMutation({
    mutationFn: reportBoard,
  });
} 