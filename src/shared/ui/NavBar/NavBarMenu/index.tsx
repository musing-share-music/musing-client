import { NAV_ITEM } from 'shared/ui/NavBar/constants';
import { NavBarSizeProps } from 'shared/ui/NavBar/type';

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
