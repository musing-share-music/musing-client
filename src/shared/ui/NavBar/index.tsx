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
  PlayList,
  Track,
  TrackListContainer,
} from './styled';
import { TrackItem } from './TrackItem';

// TODO 닫고 접기시 애니메이션 적용
// TODO 접힌 ui에서 링크 hover시 아이콘만 스타일 변경
export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavBar = () => {
    setToggle((prev) => !prev);
  };

  if (toggle)
    return (
      <NavBarContainer.Small>
        <NavContainer>
          <NavBarItemList.Small>
            {NAV_ITEM.map((item) => (
              <NavBarItem key={item.text} size="small" {...item} />
            ))}
          </NavBarItemList.Small>
        </NavContainer>

        <Aside>
          <PlayList.Small>{PlayListItem.Small({ src: TempCoverSrc })}</PlayList.Small>

          <TrackListContainer.Small>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Track key={idx}> {TrackItem.Small()}</Track>
            ))}
          </TrackListContainer.Small>
        </Aside>

        <Footer.Small>
          <AddButton />
          <FoldButton onClick={toggleNavBar} />
        </Footer.Small>
      </NavBarContainer.Small>
    );

  return (
    <NavBarContainer>
      <NavContainer>
        <NavBarItemList>
          {NAV_ITEM.map((item) => (
            <NavBarItem key={item.text} size="large" {...item} />
          ))}
        </NavBarItemList>
      </NavContainer>

      <Aside>
        <PlayList>{PlayListItem.Large({ src: TempCoverSrc })}</PlayList>

        <TrackListContainer>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Track key={idx}> {TrackItem.Large()}</Track>
          ))}
        </TrackListContainer>
      </Aside>

      <Footer>
        <AddButton />
        <FoldButton onClick={toggleNavBar} />
      </Footer>
    </NavBarContainer>
  );
};
