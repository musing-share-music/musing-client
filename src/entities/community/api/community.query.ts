import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetBoardDetail } from './boardDetail';
import { fetchGetList } from './ListGet';
import { fetchGetPageList } from './PageListGet';
import { fetchGetSearchList, FetchGetSearchListRequestDto } from './SearchListGet';

type CommunityFilters = FetchGetSearchListRequestDto;

export const community = createQueryKeys('community', {
  list: () => ({
    queryKey: ['list'],
    queryFn: () => fetchGetList(),
  }),
  pagelist: (page: number) => ({
    queryKey: [{ page }],
    queryFn: () => fetchGetPageList(page),
  }),
  filter: (filters: CommunityFilters) => ({
    queryKey: [{ ...filters }],
    queryFn: () => fetchGetSearchList(filters),
  }),
  detail: (boardId: number) => ({
    queryKey: [{ boardId }],
    queryFn: () => fetchGetBoardDetail(boardId),
  }),
});
