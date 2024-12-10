import { NavBarSize } from '.';
import TempCoverSrc from './cover.png';
import { ArtistName, Cover, CoverWrapper, MoreButton, Title, TrackInfo, TrackInfoContainer } from './styled';

export const TrackItem = ({ size }: { size: NavBarSize }) => {
  return (
    <>
      <TrackInfoContainer>
        <CoverWrapper>
          <Cover src={TempCoverSrc} />
        </CoverWrapper>
        {size === 'large' && (
          <TrackInfo>
            <Title>곡명</Title>
            <ArtistName>아티스트명 </ArtistName>
          </TrackInfo>
        )}
      </TrackInfoContainer>
      {size === 'large' && <MoreButton />}
    </>
  );
};
