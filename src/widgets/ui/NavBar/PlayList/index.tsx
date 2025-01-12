import { useState } from 'react';

import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
import { MoreButton } from 'shared/ui/MoreButton';

import { PlayListItem } from './PlayListItem';
import { PlayListContainer, PlayListFoldButton, ShowAllPlayListButton } from './styled';
import { TrackList } from './TrackList';

export const PlayList = ({ size }: NavBarSizeProps) => {
  const [open, setOpen] = useState(false);
  const openTrackList = () => setOpen((prev) => !prev);
  return (
    <>
      <PlayListContainer size={size}>
        <PlayListItem onClick={openTrackList} size={size} src={TempCoverSrc} />
        {size === 'large' && <MoreButton menuItem={[]} />}
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
