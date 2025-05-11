import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';

import { PlayListMusicInfo } from './PlayListMusicInfo';
import { PlayListMusicList } from './PlayListMusicList';
import { Layout, LeftContainer, RightContainer } from './styled';

// TODO config, model, features로 분리
export const PlayListPage = () => {
  const { data, isLoading } = useGetPlayListQuery(
    'https://www.youtube.com/watch?v=fLi0EJfi_vg&list=PLO4VyZQCaadQf9fMsbgn-geTh5wo5GBeY&pp=gAQB',
  );
  return (
    <Layout>
      <LeftContainer>
        <PlayListMusicInfo />
      </LeftContainer>
      <RightContainer>
        <PlayListMusicList></PlayListMusicList>
      </RightContainer>
    </Layout>
  );
};
