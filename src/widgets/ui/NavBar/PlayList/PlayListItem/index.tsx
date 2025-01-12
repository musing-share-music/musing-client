import { Cover, Title } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { PlayListCoverWrapper, PlayListInfo } from './styled';

interface PlayListItemProps extends NavBarSizeProps {
  src: string;
  onClick: () => void;
}

export const PlayListItem = ({ onClick, src, size }: PlayListItemProps) => {
  return (
    <PlayListInfo onClick={() => onClick()}>
      <PlayListCoverWrapper>
        <Cover src={src} draggable={false} />
      </PlayListCoverWrapper>
      {size === 'large' && <Title>플레이리스트1</Title>}
    </PlayListInfo>
  );
};
