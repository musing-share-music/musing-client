import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetPlayListDetailQuery } from 'features/playlist/lib/useGetPlayListDetailQuery';
import { usePlayListSaveAllPostMutation } from 'features/playlist/lib/usePostPlayListSaveAllQuery';

import { Representative, SavePlayListPayload } from 'entities/playlist/type';

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

  const [modifyData, setModifyData] = useState<SavePlayListPayload>(data);
  useEffect(() => {
    if (data) {
      setModifyData(data);
    }
  }, [data]);

  const saveAllMutation = usePlayListSaveAllPostMutation();

  return (
    <Layout>
      <LeftContainer>
        <PlayListMusicInfo
          representative={data?.representative}
          modify={modify}
          setModify={setModify}
          onRefresh={refetch}
          onSave={() => {
            saveAllMutation.mutate(modifyData, {
              onSuccess: () => {
                setModify(false);
              },
              onError: () => {
                alert('실패');
              },
            });
          }}
        />
      </LeftContainer>
      <RightContainer>
        <PlayListMusicList videoList={data?.videoList} modify={modify}></PlayListMusicList>
      </RightContainer>
    </Layout>
  );
};
