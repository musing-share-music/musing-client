import TempCoverSrc from '../cover.png';
import { Cover, CoverWrapper, MoreButton, Title } from '../styled';
import { NavBarSizeProps } from '../type';
import { ArtistName, TrackInfo, TrackInfoContainer } from './styled';

export const TrackItem = ({ size }: NavBarSizeProps) => {
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
