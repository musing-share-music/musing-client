import { useState } from 'react';

import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';

import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
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

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleTrackList = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <>
      {data?.playLists.slice(0, 3).map((item: PlayList, index: number) => (
        <div key={index}>
          <PlayListContainer size={size}>
            <PlayListItem onClick={() => toggleTrackList(index)} size={size} src={TempCoverSrc} list={item} />
            {size === 'large' && <MoreButton menuItem={[]} />}
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
    </>
  );
};
