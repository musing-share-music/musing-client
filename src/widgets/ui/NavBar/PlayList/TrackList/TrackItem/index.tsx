import TempCoverSrc from 'widgets/ui/NavBar/cover.png';
import { Cover, CoverWrapper, Title } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { MoreButton } from 'shared/ui/MoreButton';

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
