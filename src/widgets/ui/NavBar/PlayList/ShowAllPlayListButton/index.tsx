import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'shared/config/routes';

import { ShowAllPlayListButton as StyledButton } from '../styled';

interface ShowAllPlayListButtonProps {
  openIndexes: number[];
  playLists: Array<{
    youtubePlaylistId: string;
  }>;
}

export const ShowAllPlayListButton = ({ openIndexes, playLists }: ShowAllPlayListButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 현재 펼쳐진 플레이리스트가 있는 경우 해당 플레이리스트의 상세 페이지로 이동
    if (openIndexes.length > 0 && playLists) {
      const openIndex = openIndexes[0]; // 현재는 하나만 열릴 수 있으므로 첫 번째 요소
      const openPlaylist = playLists[openIndex];
      navigate(`${ROUTES.PLAYLIST}`, {
        state: {
          id: openPlaylist.youtubePlaylistId,
        },
      });
    } else {
      // 펼쳐진 플레이리스트가 없는 경우 일반 플레이리스트 페이지로 이동
      navigate(ROUTES.PLAYLIST);
    }
  };

  return <StyledButton onClick={handleClick}>플레이리스트 전체 보기</StyledButton>;
}; 