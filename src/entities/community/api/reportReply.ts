import { useMutation } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export interface ReportReplyRequest {
  replyId: number;
  content: string;
}

interface ReportReplyResponse {
  message: string;
}

const reportReply = async ({ replyId, content }: ReportReplyRequest) => {
  const response = await axiosInstance.post<ReportReplyResponse>(
    URL.SERVERURL + URL.API.REPORT_REPLY,
    null,
    {
      params: {
        replyId,
        content,
      },
    }
  );
  return response.data;
};

export function useReportReply() {
  return useMutation({
    mutationFn: reportReply,
  });
} 