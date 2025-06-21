import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetCommunity } from './CommunityGet';
import { fetchGetCommunitySearch } from './CommunitySearchGet';
import { fetchGetMemberInfo } from './MemberInfoGet';
import { fetchGetMemberWithDraw } from './MemberWithdraw copy';
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
  reviewSearch: (page: number, sort: string, searchType: string, keyword: string) => ({
    queryKey: [{ keyword }],
    queryFn: () => fetchGetReviewSearch(page, sort, searchType, keyword),
  }),
  community: (page: number, sort: string) => ({
    queryKey: [{ page, sort }],
    queryFn: () => fetchGetCommunity(page, sort),
  }),
  communitySearch: (page: number, sort: string, searchType: string, keyword: string) => ({
    queryKey: [{ keyword }],
    queryFn: () => fetchGetCommunitySearch(page, sort, searchType, keyword),
  }),
  withDraw: () => ({
    queryKey: ['withdraw'],
    queryFn: () => fetchGetMemberWithDraw(),
  }),
});
