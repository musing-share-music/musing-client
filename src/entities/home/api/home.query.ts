import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetGenre } from './GenreGet';
import { fetchGetMain } from './MainGet';

export const home = createQueryKeys('home', {
  main: () => ({
    queryKey: ['main'],
    queryFn: () => fetchGetMain(),
  }),
  genre: (genreName: string) => ({
    queryKey: [{ genreName }],
    queryFn: () => fetchGetGenre(genreName),
  }),
});
