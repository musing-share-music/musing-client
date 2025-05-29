import { useNavigate } from 'react-router-dom';

import { Cover, Title } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { ROUTES } from 'shared/config/routes';

import { PlayListCoverWrapper, PlayListInfo } from './styled';

interface PlayList {
  listname: string;
  itemCount: number;
  youtubePlaylistId: string;
  youtubeLink: string;
  description: string;
  thumbnailUrl?: string;
}

interface PlayListItemProps extends NavBarSizeProps {
  src: string;
  onClick: () => void;
  list: PlayList;
}
export const PlayListItem = ({ onClick, size, list }: PlayListItemProps) => {
  const navigate = useNavigate();

  return (
    <PlayListInfo onClick={onClick}>
      <PlayListCoverWrapper>
        <Cover
          src={list.thumbnailUrl}
          draggable={false}
          onClick={async (e) => {
            e.stopPropagation();
            await navigate(`${ROUTES.PLAYLIST}`, {
              state: {
                id: list.youtubePlaylistId,
              },
            });
          }}
        />
      </PlayListCoverWrapper>
      {size === 'large' && <Title>{list.listname}</Title>}
    </PlayListInfo>
  );
};
