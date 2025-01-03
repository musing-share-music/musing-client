import { useNavBarSize } from 'widgets/model/useNavBarSize';

import { Footer } from './Footer';
import { NavBarMenu } from './NavBarMenu';
import { PlayList } from './PlayList';
import { Aside, NavBarContainer } from './styled';

export const NavBar = () => {
  const { size, toggleNavBar } = useNavBarSize();

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
