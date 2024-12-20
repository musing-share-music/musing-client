import { MoreButton } from 'shared/ui/MoreButton';
import TempCoverSrc from 'shared/ui/NavBar/cover.png';
import { Cover, CoverWrapper, Title } from 'shared/ui/NavBar/styled';
import { NavBarSizeProps } from 'shared/ui/NavBar/type';

import { ArtistName, TrackInfo, TrackInfoContainer } from './styled';

export const TrackItem = ({ size }: NavBarSizeProps) => {
  return (
    <>
      <TrackInfoContainer>
        <CoverWrapper>
          <Cover src={TempCoverSrc} draggable={false} />
        </CoverWrapper>
        {size === 'large' && (
          <TrackInfo>
            <Title>곡명</Title>
            <ArtistName>아티스트명 </ArtistName>
          </TrackInfo>
        )}
      </TrackInfoContainer>
      {size === 'large' && <MoreButton menuItem={[]} />}
    </>
  );
};
