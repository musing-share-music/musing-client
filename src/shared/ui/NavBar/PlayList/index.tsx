import { Cover, MoreButton, Title } from '../styled';
import { NavBarSizeProps } from '../type';
import { PlayListCoverWrapper, PlayListInfo } from './styled';

interface PlayListItemProps extends NavBarSizeProps {
  src: string;
}

export const PlayListItem = ({ src, size }: PlayListItemProps) => {
  return (
    <>
      <PlayListInfo>
        <PlayListCoverWrapper>
          <Cover src={src} draggable={false} />
        </PlayListCoverWrapper>
        {size === 'large' && <Title>플레이리스트1</Title>}
      </PlayListInfo>
      {size === 'large' && <MoreButton />}
    </>
  );
};
