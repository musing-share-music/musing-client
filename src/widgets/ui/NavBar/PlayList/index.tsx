import { useState } from 'react';

import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';
import { DeleteReviewModal } from 'widgets/ui/PlayList/DeleteReviewModal';

import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';
import { usePlayListRemovePostMutation } from 'features/playlist/lib/usePostPlayListRemoveQuery';

import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';
import { MoreButton } from 'shared/ui/MoreButton';

import { PlayListItem } from './PlayListItem';
import { PlayListContainer, PlayListFoldButton, ShowAllPlayListButton } from './styled';
import { TrackList } from './TrackList';

interface PlayList {
  listname: string;
  itemCount: number;
  youtubePlaylistId: string;
  youtubeLink: string;
  description: string;
}

export const PlayList = ({ size }: NavBarSizeProps) => {
  const { data } = useGetPlayListQuery();
  const removeMutation = usePlayListRemovePostMutation();

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [open, setOpen] = useState(false); // 삭제 모달 오픈 상태
  const [targetPlaylistId, setTargetPlaylistId] = useState<string | null>(null); // 삭제 대상

  const [errorModalOpen, setErrorModalOpen] = useState(false); // 에러 모달 상태
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지

  const toggleTrackList = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const handleDeleteReview = () => {
    if (!targetPlaylistId || removeMutation.isPending) return;

    removeMutation.mutate(
      { playlistId: targetPlaylistId },
      {
        onSuccess: () => {
          alert('플레이리스트가 삭제되었습니다.');
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
                      setTargetPlaylistId(item.youtubePlaylistId); // 삭제 대상 설정
                      setOpen(true); // 삭제 모달 열기
                    },
                  },
                ]}
              />
            )}
          </PlayListContainer>

          <TrackList size={size} open={openIndexes.includes(index)} playListId={item.youtubePlaylistId} />
        </div>
      ))}

      {openIndexes.length > 0 && (
        <>
          <PlayListFoldButton onClick={() => setOpenIndexes([])}>
            <IconFold width={18} height={18} />
          </PlayListFoldButton>
          <ShowAllPlayListButton>플레이리스트 전체 보기</ShowAllPlayListButton>
        </>
      )}

      <DeleteReviewModal open={open} onClose={() => setOpen(false)} onConfirm={handleDeleteReview} />

      <ErrorModal open={errorModalOpen} onClose={closeErrorModal}>
        {errorMessage}
      </ErrorModal>
    </>
  );
};
