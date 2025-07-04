import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

interface DeleteReportedReplyResponse {
  message: string;
}

export const deleteReportedReply = async (replyId: number) => {
  const response = await axiosInstance.put<DeleteReportedReplyResponse>(
    `${URL.SERVERURL}musing/admin/report/reply`,
    null,
    {
      params: { replyId },
    },
  );
  return response.data;
};
