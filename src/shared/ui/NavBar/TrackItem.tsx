import TempCoverSrc from './cover.png';
import { ArtistName, Cover, CoverWrapper, MoreButton, Title, TrackInfo, TrackInfoContainer } from './styled';

export const TrackItem = {
  Small: () => (
    <>
      <TrackInfoContainer>
        <CoverWrapper>
          <Cover src={TempCoverSrc} />
        </CoverWrapper>
      </TrackInfoContainer>
    </>
  ),
  Large: () => (
    <>
      <TrackInfoContainer>
        <CoverWrapper>
          <Cover src={TempCoverSrc} />
        </CoverWrapper>
        <TrackInfo>
          <Title>곡명</Title>
          <ArtistName>아티스트명 </ArtistName>
        </TrackInfo>
      </TrackInfoContainer>
      <MoreButton />
    </>
  ),
};
