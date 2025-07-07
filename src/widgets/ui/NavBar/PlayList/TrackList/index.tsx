import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { NoMusicText, Track, TrackListContainer, TrackListScrollableContainer } from './styled';
import { TrackItem } from './TrackItem';

export interface TrackItemType {
  albumName: string;
  artists: Array<{ id: number; name: string }> | null;
  genres: Array<{ id: number; genreName: string }> | null;
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
        {listAll.length > 0 ? (
          listAll.map((item, idx) => (
            <Track key={idx} size={size}>
              <TrackItem size={size} list={item} />
            </Track>
          ))
        ) : (
          <NoMusicText>저장된 음악이 없습니다.</NoMusicText>
        )}
      </TrackListScrollableContainer>
    </TrackListContainer>
  );
};
