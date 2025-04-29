import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetBoardList } from './boardList';

export const adminPermit = createQueryKeys('adminPermit', {
  list: (page?: number) => ({
    queryKey: ['list', { page }],
    queryFn: () => fetchGetBoardList({ page: page || 1 }),
  }),
  // filter: (filters: AdminPermitFilters) => ({
  //     queryKey: [{ ...filters }],
  //     queryFn: () => fetchGetSearchList(filters),
  // }),
  // detail: (boardId: number) => ({
  //     queryKey: [{ boardId }],
  //     queryFn: () => fetchGetBoardDetail(boardId),
  // }),
});
