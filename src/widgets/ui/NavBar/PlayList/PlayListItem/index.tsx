import { Cover, Title } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { PlayListCoverWrapper, PlayListInfo } from './styled';

interface PlayList {
  listname: string;
  itemCount: number;
  youtubePlaylistId: string;
  youtubeLink: string;
  description: string;
}

interface PlayListItemProps extends NavBarSizeProps {
  src: string;
  onClick: () => void;
  list: PlayList;
}
export const PlayListItem = ({ onClick, src, size, list }: PlayListItemProps) => {
  return (
    <PlayListInfo onClick={onClick}>
      <PlayListCoverWrapper>
        <Cover src={list.youtubeLink || src} draggable={false} />
      </PlayListCoverWrapper>
      {size === 'large' && <Title>{list.listname}</Title>}
    </PlayListInfo>
  );
};
