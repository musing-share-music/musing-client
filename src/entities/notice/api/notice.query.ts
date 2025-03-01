import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetNotice, fetchGetNoticeDetail } from '.';

export const notice = createQueryKeys('notice', {
  list: ({ page }: { page: number }) => ({
    queryKey: ['list', { page }],
    queryFn: () => fetchGetNotice({ page }),
  }),
  detail: (noticeId: number) => ({
    queryKey: ['detail', { noticeId }],
    queryFn: () => fetchGetNoticeDetail({ noticeId }),
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
});
