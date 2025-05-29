import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { Track, TrackListContainer, TrackListScrollableContainer } from './styled';
import { TrackItem } from './TrackItem';

export interface TrackItemType {
  albumName: string;
  genres: string[] | null;
  name: string;
  playtime: string | null;
  songLink: string;
  thumbNailLink: string;
}

export interface TrackListProps extends NavBarSizeProps {
  open: boolean;
  playListId: string;
  listAll: TrackItemType[];
}

export const TrackList = ({ size, open, playListId, listAll }: TrackListProps) => {
  return (
    <TrackListContainer size={size} open={open} playListId={playListId} listAll={listAll}>
      <TrackListScrollableContainer>
        {listAll.map((item, idx) => (
          <Track key={idx} size={size}>
            <TrackItem size={size} list={item} />
          </Track>
        ))}
      </TrackListScrollableContainer>
    </TrackListContainer>
  );
};
