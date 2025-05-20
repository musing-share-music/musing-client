import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetPlayListDetailQuery } from 'features/playlist/lib/useGetPlayListDetailQuery';

import { PlayListMusicInfo } from './PlayListMusicInfo';
import { PlayListMusicList } from './PlayListMusicList';
import { Layout, LeftContainer, RightContainer } from './styled';

// TODO config, model, features로 분리
export const PlayListPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  const { data, refetch } = useGetPlayListDetailQuery(id, {
    enabled: !!id,
  });

  const [modify, setModify] = useState(false);

  return (
    <Layout>
      <LeftContainer>
        <PlayListMusicInfo
          representative={data?.representative}
          modify={modify}
          setModify={setModify}
          onRefresh={refetch}
        />
      </LeftContainer>
      <RightContainer>
        <PlayListMusicList videoList={data?.videoList} modify={modify}></PlayListMusicList>
      </RightContainer>
    </Layout>
  );
};
