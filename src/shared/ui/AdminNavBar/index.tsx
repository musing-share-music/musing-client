import { useState } from 'react';

import { AdminProfile } from './AdminProfile';
import { Footer } from './Footer';
import { NavBarMenu } from './NavBarMenu';
import { NavBarContainer } from './styled';

export const AdminNavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavBar = () => {
    setToggle((prev) => !prev);
  };

  const size = toggle ? 'small' : 'large';

  return (
    <NavBarContainer size={size}>
      <AdminProfile />
      <NavBarMenu size={size} />
      <Footer size={size} onClickFoldButton={toggleNavBar} />
    </NavBarContainer>
  );
};
