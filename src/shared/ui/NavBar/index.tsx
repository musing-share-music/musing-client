import { useState } from 'react';

import styled from '@emotion/styled';
import IconFold from 'shared/assets/image/icons/nav-bar/icon-fold.svg?react';
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
} from './styled';
import { TrackList } from './TrackList';
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
        <PlayList size={size} />
        <PlayList size={size} />
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
    <NavContainer size={size}>
      <NavBarItemList size={size}>
        {NAV_ITEM.map((item) => (
          <NavBarItem key={item.text} size={size} {...item} />
        ))}
      </NavBarItemList>
    </NavContainer>
  );
};

const PlayList = ({ size }: NavBarSizeProps) => {
  const [open, setOpen] = useState(false);
  const openTrackList = () => setOpen((prev) => !prev);
  return (
    <>
      <StyledPlayList size={size} onClick={openTrackList}>
        <PlayListItem size={size} src={TempCoverSrc} />
      </StyledPlayList>
      <TrackList size={size} open={open} />
      {open && (
        <>
          <PlayListFoldButton onClick={openTrackList}>
            <IconFold width={18} height={18} />
          </PlayListFoldButton>
          <ShowAllPlayListButton>플레이리스트 전체 보기</ShowAllPlayListButton>
        </>
      )}
    </>
  );
};
const PlayListFoldButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 11px 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors[500]};
  cursor: pointer;
`;

const ShowAllPlayListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 0;
  border: none;
  color: ${({ theme }) => theme.colors[400]};
  cursor: pointer;
`;
