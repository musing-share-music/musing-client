import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetReply, FetchGetReplyDto } from '.';

export const reply = createQueryKeys('reply', {
  list: ({ boardId, ...filters }: FetchGetReplyDto) => ({
    queryKey: [{ boardId, ...filters }],
    queryFn: () => fetchGetReply({ boardId, ...filters }),
  }),
});
