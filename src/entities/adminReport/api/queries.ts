import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteReportedBoard } from './deleteReportedBoard';
import { deleteReportedReply } from './deleteReportedReply';
import { fetchGetReportedBoardList } from './reportBoard';
import { fetchGetReportedReplyList } from './reportReply';

// Board related queries
export const adminReportBoard = createQueryKeys('adminReportBoard', {
  list: (page?: number) => ({
    queryKey: ['reportedBoardList', { page }],
    queryFn: () => fetchGetReportedBoardList({ page: page || 1 }),
  }),
});

export const useDeleteReportedBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReportedBoard,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: adminReportBoard._def });
    },
  });
};

// Reply related queries
export const adminReportReply = createQueryKeys('adminReportReply', {
  list: (page?: number) => ({
    queryKey: ['reportedReplyList', { page }],
    queryFn: () => fetchGetReportedReplyList({ page: page || 1 }),
  }),
});

export const useDeleteReportedReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReportedReply,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: adminReportReply._def });
    },
  });
};
