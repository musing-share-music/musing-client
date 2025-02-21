import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetMemberInfo } from './MemberInfoGet';
import { fetchGetReview } from './ReviewGet';
import { fetchGetReviewSearch } from './ReviewSearchGet';

export const member = createQueryKeys('member', {
  info: () => ({
    queryKey: ['memberInfo'],
    queryFn: () => fetchGetMemberInfo(),
  }),
  review: (page: number, sort: string) => ({
    queryKey: [{ page, sort }],
    queryFn: () => fetchGetReview(page, sort),
  }),
  reviewSearch: (page: number, sort: string, keyword: string) => ({
    queryKey: [{ keyword }],
    queryFn: () => fetchGetReviewSearch(page, sort, keyword),
  }),
});
