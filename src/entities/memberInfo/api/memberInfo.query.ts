import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetMemberInfo } from './MemberInfoGet';
import { fetchGetReview } from './ReviewGet';

export const member = createQueryKeys('member', {
  info: () => ({
    queryKey: ['memberInfo'],
    queryFn: () => fetchGetMemberInfo(),
  }),
  review: (page: number, sort: string) => ({
    queryKey: [{ page, sort }],
    queryFn: () => fetchGetReview(page, sort),
  }),
});
