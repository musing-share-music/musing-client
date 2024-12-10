import { useState } from 'react';

import { Footer } from './Footer';
import { NavBarMenu } from './NavBarMenu';
import { PlayList } from './PlayList';
import { Aside, NavBarContainer } from './styled';

export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavBar = () => {
    setToggle((prev) => !prev);
  };

  const size = toggle ? 'small' : 'large';

  return (
    <NavBarContainer size={size}>
      <NavBarMenu size={size} />

      <Aside>
        <PlayList size={size} />
        <PlayList size={size} />
        <PlayList size={size} />
      </Aside>

      <Footer size={size} onClickFoldButton={toggleNavBar} />
    </NavBarContainer>
  );
};
