import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

interface DeleteReportedBoardResponse {
  message: string;
}

export const deleteReportedBoard = async (boardId: number) => {
  const response = await axiosInstance.put<DeleteReportedBoardResponse>(
    `${URL.SERVERURL}musing/admin/report/board`,
    null,
    {
      params: { boardId },
    },
  );
  return response.data;
};
