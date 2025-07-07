import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetNotice, fetchGetNoticeDetail, fetchGetNoticeSearch } from '.';

export const notice = createQueryKeys('notice', {
  list: ({ page }: { page: number }) => ({
    queryKey: ['list', { page }],
    queryFn: () => fetchGetNotice({ page }),
  }),
  detail: (noticeId: number) => ({
    queryKey: ['detail', { noticeId }],
    queryFn: () => fetchGetNoticeDetail({ noticeId }),
  }),
  search: ({ page, keyword }: { page: number; keyword: string }) => ({
    queryKey: ['search ', { page, keyword }],
    queryFn: () => fetchGetNoticeSearch({ page, keyword }),
  }),
});

export const adminNotice = createQueryKeys('adminNotice', {
  list: ({ page }: { page: number }) => ({
    queryKey: ['list', { page }],
    queryFn: () => fetchGetNotice({ page }),
  }),
  detail: (noticeId: number) => ({
    queryKey: ['detail', { noticeId }],
    queryFn: () => fetchGetNoticeDetail({ noticeId }),
  }),
  search: ({ page, keyword }: { page: number; keyword: string }) => ({
    queryKey: ['search ', { page, keyword }],
    queryFn: () => fetchGetNoticeSearch({ page, keyword }),
  }),
});
