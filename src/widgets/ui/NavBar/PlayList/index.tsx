import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';
import { DeleteReviewModal } from 'widgets/ui/PlayList/DeleteReviewModal';

import { useGetPlayListAllQuery } from 'features/playlist/lib/useGetPlayListAllQuery';
import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';
import { usePlayListRemovePostMutation } from 'features/playlist/lib/usePostPlayListRemoveQuery';

import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
import { useUserInfoStore } from 'shared/store/userInfo';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';
import { MoreButton } from 'shared/ui/MoreButton';
import { Spinner } from 'shared/ui/Spinner';

import { PlayListItem } from './PlayListItem';
import { ShowAllPlayListButton } from './ShowAllPlayListButton';
import { PlayListContainer, PlayListFoldButton } from './styled';
import { TrackList } from './TrackList';

interface PlayList {
  listname: string;
  itemCount: number;
  youtubePlaylistId: string;
  youtubeLink: string;
  description: string;
}

export const PlayList = ({ size }: NavBarSizeProps) => {
  const { isLogin } = useUserInfoStore();
  const { data } = useGetPlayListQuery(isLogin());
  const { data: dataAll } = useGetPlayListAllQuery(isLogin());

  const removeMutation = usePlayListRemovePostMutation();
  const navigate = useNavigate();

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [open, setOpen] = useState(false); // 삭제 모달 오픈 상태
  const [targetPlaylistId, setTargetPlaylistId] = useState<string | null>(null); // 삭제 대상

  const [errorModalOpen, setErrorModalOpen] = useState(false); // 에러 모달 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지

  const toggleTrackList = (index: number) => {
    setOpenIndexes((prev) => {
      // 이미 열려있는 플레이리스트를 클릭한 경우 닫기
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      // 다른 플레이리스트를 클릭한 경우 기존 것을 닫고 새로운 것만 열기
      return [index];
    });
  };

  const handleDeleteReview = () => {
    if (!targetPlaylistId || removeMutation.isPending) return;

    removeMutation.mutate(
      { playlistId: targetPlaylistId, shouldNavigate: false, navigate },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: () => {
          setErrorMessage('플레이리스트 삭제 중 오류가 발생했습니다.');
          setErrorModalOpen(true);
          setOpen(false);
        },
      },
    );
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
    setErrorMessage('');
  };

  return (
    <>
      {data?.playLists.slice(0, 3).map((item: PlayList, index: number) => (
        <div key={item.youtubePlaylistId}>
          <PlayListContainer size={size}>
            <PlayListItem onClick={() => toggleTrackList(index)} size={size} src={TempCoverSrc} list={item} />
            {size === 'large' && (
              <MoreButton
                menuItem={[
                  {
                    content: '플레이리스트 삭제',
                    onClick: () => {
                      setTargetPlaylistId(item.youtubePlaylistId);
                      setOpen(true);
                    },
                  },
                ]}
              />
            )}
          </PlayListContainer>

          {dataAll ? (
            <TrackList
              size={size}
              open={openIndexes.includes(index)}
              playListId={item.youtubePlaylistId}
              listAll={dataAll[index]?.videoList ?? []}
            />
          ) : null}
        </div>
      ))}

      {openIndexes.length > 0 && (
        <>
          <PlayListFoldButton onClick={() => setOpenIndexes([])}>
            <IconFold width={18} height={18} />
          </PlayListFoldButton>
          <ShowAllPlayListButton openIndexes={openIndexes} playLists={data?.playLists || []} />
        </>
      )}

      <DeleteReviewModal open={open} onClose={() => setOpen(false)} onConfirm={handleDeleteReview} />

      <ErrorModal open={errorModalOpen} onClose={closeErrorModal}>
        {errorMessage}
      </ErrorModal>

      {removeMutation.isPending && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <Spinner />
        </div>
      )}
    </>
  );
};
