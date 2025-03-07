import { NAV_ITEM } from 'widgets/config/navItem';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { NavBarItem } from './NavBarItem';
import { NavBarItemList, NavContainer } from './styled';

export const NavBarMenu = ({ size }: NavBarSizeProps) => {
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
