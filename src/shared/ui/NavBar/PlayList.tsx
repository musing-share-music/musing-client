import { NavBarSize } from '.';
import { Cover, MoreButton, PlayListCoverWrapper, PlayListInfo, Title } from './styled';

export const PlayListItem = ({ src, size }: { src: string; size: NavBarSize }) => {
  return (
    <>
      <PlayListInfo>
        <PlayListCoverWrapper>
          <Cover src={src} />
        </PlayListCoverWrapper>
        {size === 'large' && <Title>플레이리스트1</Title>}
      </PlayListInfo>
      {size === 'large' && <MoreButton />}
    </>
  );
};
