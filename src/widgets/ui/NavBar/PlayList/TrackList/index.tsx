import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { Track, TrackListContainer, TrackListScrollableContainer } from './styled';
import { TrackItem } from './TrackItem';

export interface TrackListProps extends NavBarSizeProps {
  open: boolean;
  playListId: string;
}

export const TrackList = ({ size, open, playListId }: TrackListProps) => {
  return (
    <TrackListContainer size={size} open={open} playListId={playListId}>
      <TrackListScrollableContainer>
        {Array.from({ length: 19 }).map((_, idx) => (
          <Track key={idx} size={size}>
            <TrackItem size={size} />
          </Track>
        ))}
      </TrackListScrollableContainer>
    </TrackListContainer>
  );
};
