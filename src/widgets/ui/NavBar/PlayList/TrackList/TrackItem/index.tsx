// import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { Cover, CoverWrapper, Title } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { MoreButton } from 'shared/ui/MoreButton';

import { ArtistName, TrackInfo, TrackInfoContainer } from './styled';

export interface TrackItemType {
  albumName: string;
  artists: Array<{ id: number; name: string }> | null;
  genres: Array<{ id: number; genreName: string }> | null;
  name: string;
  playtime: string | null;
  songLink: string;
  thumbNailLink: string;
}

interface TrackItemProps extends NavBarSizeProps {
  list: TrackItemType;
}

export const TrackItem = ({ size, list }: TrackItemProps) => {
  return (
    <>
      <TrackInfoContainer>
        <CoverWrapper>
          <Cover src={list.thumbNailLink} draggable={false} />
        </CoverWrapper>
        {size === 'large' && (
          <TrackInfo>
            <Title>{list.name}</Title>
            <ArtistName>
              {list.artists && list.artists.map((artist, index) => (
                <span key={artist.id}>
                  {artist.name}
                  {index < list.artists!.length - 1 ? ', ' : ''}
                </span>
              ))}
            </ArtistName>
          </TrackInfo>
        )}
      </TrackInfoContainer>
      {size === 'large' && <MoreButton menuItem={[]} />}
    </>
  );
};
