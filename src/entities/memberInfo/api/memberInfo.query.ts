import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetMemberInfo } from './MemberInfoGet';

export const member = createQueryKeys('member', {
  info: () => ({
    queryKey: ['memberInfo'],
    queryFn: () => fetchGetMemberInfo(),
  }),
});
