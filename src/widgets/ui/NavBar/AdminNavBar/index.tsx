import { useNavBarSize } from 'widgets/model/useNavBarSize';

import { AdminProfile } from './AdminProfile';
import { Footer } from './Footer';
import { NavBarMenu } from './NavBarMenu';
import { NavBarContainer } from './styled';

export const AdminNavBar = () => {
  const { size, toggleNavBar } = useNavBarSize();

  return (
    <NavBarContainer size={size}>
      <AdminProfile />
      <NavBarMenu size={size} />
      <Footer size={size} onClickFoldButton={toggleNavBar} />
    </NavBarContainer>
  );
};
