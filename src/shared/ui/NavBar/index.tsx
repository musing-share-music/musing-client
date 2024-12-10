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
import { NavBarSizeProps } from './type';

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

const NavBarMenuItem = ({ size }: NavBarSizeProps) => {
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

const PlayList = ({ size }: NavBarSizeProps) => {
  return (
    <StyledPlayList size={size}>
      <PlayListItem size={size} src={TempCoverSrc} />
    </StyledPlayList>
  );
};

const TrackList = ({ size }: NavBarSizeProps) => {
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
