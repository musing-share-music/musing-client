import { useState } from 'react';

import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
import TempCoverSrc from 'shared/ui/NavBar/cover.png';
import { NavBarSizeProps } from 'shared/ui/NavBar/type';

import { PlayListItem } from './PlayListItem';
import { PlayListContainer, PlayListFoldButton, ShowAllPlayListButton } from './styled';
import { TrackList } from './TrackList';

export const PlayList = ({ size }: NavBarSizeProps) => {
  const [open, setOpen] = useState(false);
  const openTrackList = () => setOpen((prev) => !prev);
  return (
    <>
      <PlayListContainer size={size} onClick={openTrackList}>
        <PlayListItem size={size} src={TempCoverSrc} />
      </PlayListContainer>
      <TrackList size={size} open={open} />
      {open && (
        <>
          <PlayListFoldButton onClick={openTrackList}>
            <IconFold width={18} height={18} />
          </PlayListFoldButton>
          <ShowAllPlayListButton>플레이리스트 전체 보기</ShowAllPlayListButton>
        </>
      )}
    </>
  );
};
