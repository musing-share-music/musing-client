import { useState } from 'react';

import { NAV_ITEM } from './constants';
import TempCoverSrc from './cover.png';
import { NavBarItem } from './NavBarItem';
import { PlayListItem } from './PlayList';
import {
  AddButton,
  Aside,
  FoldButton,
  Footer,
  NavBarContainer,
  NavBarItemList,
  NavContainer,
  PlayList as StyledPlayList,
  Track,
  TrackListContainer,
} from './styled';
import { TrackItem } from './TrackItem';

export type NavBarSize = 'small' | 'large';

// TODO 접힌 ui에서 링크 hover시 아이콘만 스타일 변경
export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavBar = () => {
    setToggle((prev) => !prev);
  };

  const size = toggle ? 'small' : 'large';

  return (
    <NavBarContainer size={size}>
      <NavBarMenuItem size={size} />

      <Aside>
        <PlayList size={size} />
        <TrackList size={size} />
      </Aside>

      <Footer size={size}>
        <AddButton />
        <FoldButton onClick={toggleNavBar} />
      </Footer>
    </NavBarContainer>
  );
};

const NavBarMenuItem = ({ size }: { size: NavBarSize }) => {
  return (
    <NavContainer>
      <NavBarItemList size={size}>
        {NAV_ITEM.map((item) => (
          <NavBarItem key={item.text} size={size} {...item} />
        ))}
      </NavBarItemList>
    </NavContainer>
  );
};

const PlayList = ({ size }: { size: NavBarSize }) => {
  return (
    <StyledPlayList size={size}>
      <PlayListItem size={size} src={TempCoverSrc} />
    </StyledPlayList>
  );
};

const TrackList = ({ size }: { size: NavBarSize }) => {
  return (
    <TrackListContainer size={size}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Track key={idx}>
          <TrackItem size={size} />
        </Track>
      ))}
    </TrackListContainer>
  );
};
