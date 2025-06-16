import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetPlayListDetailQuery } from 'features/playlist/lib/useGetPlayListDetailQuery';
import { usePlayListModifyPostMutation } from 'features/playlist/lib/usePostPlayListModifyQuery';

import { SavePlayListPayload } from 'entities/playlist/type';

import { PlayListMusicInfo } from './PlayListMusicInfo';
import { PlayListMusicList, Video } from './PlayListMusicList';
import { Layout, LeftContainer, RightContainer } from './styled';

export const PlayListPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  const { data, refetch } = useGetPlayListDetailQuery(id, {
    enabled: !!id,
  });

  const [modify, setModify] = useState(false);
  const [modifyData, setModifyData] = useState<SavePlayListPayload>(data);

  const [deleteVideos, setDeleteVideos] = useState<Video[]>([]);
  console.log(deleteVideos);

  useEffect(() => {
    if (data) {
      setModifyData(data);
    }
  }, [data]);

  const modifyMutation = usePlayListModifyPostMutation();

  // 대표 정보 업데이트 함수
  const handleUpdateRepresentative = (updatedRep: SavePlayListPayload['representative']) => {
    setModifyData((prev) => ({
      ...prev,
      representative: updatedRep,
    }));
  };

  // 비디오 리스트 수정 함수
  const handleUpdateVideoList = (updatedVideoList: SavePlayListPayload['videoList']) => {
    setModifyData((prev) => ({
      ...prev,
      videoList: updatedVideoList,
    }));
  };

  return (
    <Layout>
      <LeftContainer>
        <PlayListMusicInfo
          representative={modifyData?.representative}
          modify={modify}
          setModify={setModify}
          onRefresh={refetch}
          onSave={(updatedRep) => {
            handleUpdateRepresentative(updatedRep);

            modifyMutation.mutate(
              {
                playlistId: modifyData?.representative.youtubePlaylistId,
                deleteVideoLinks: deleteVideos.map((v) => v.songLink),
                body: {
                  title: updatedRep.listName,
                  description: updatedRep.description,
                },
              },
              {
                onSuccess: () => {
                  setModify(false);
                },
                onError: () => {
                  alert('실패');
                },
              },
            );
          }}
        />
      </LeftContainer>

      <RightContainer>
        {modifyData && (
          <PlayListMusicList
            videoList={modifyData.videoList}
            modify={modify}
            setVideoList={handleUpdateVideoList}
            setDeleteVideos={setDeleteVideos}
          />
        )}
      </RightContainer>
    </Layout>
  );
};
