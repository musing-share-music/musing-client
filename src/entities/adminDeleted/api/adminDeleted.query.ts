import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { fetchGetDeletedBoardDetail, fetchGetDeletedBoardList } from './adminDeleted';

export const adminDeletedBoardList = createQueryKeys('adminDeletedBoard', {
  list: () => ({
    queryKey: ['adminDeletedBoard'],
    queryFn: () => fetchGetDeletedBoardList(),
  }),
  detail: (id: number) => ({
    queryKey: ['adminDeletedBoard', id],
    queryFn: () => fetchGetDeletedBoardDetail(id),
  }),
});

export const useAdminDeletedBoardList = () => {
  return useQuery({
    ...adminDeletedBoardList.list(),
    select: (data) => {
      return data.data;
    },
  });
};

export const useAdminDeletedBoardDetail = (id: number) => {
  return useQuery({
    ...adminDeletedBoardList.list(),
    queryKey: ['adminDeletedBoard', id],
    queryFn: () => fetchGetDeletedBoardDetail(id),
    select: (data) => {
      return data.data;
    },
  });
};
