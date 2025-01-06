import { useLocation } from 'react-router-dom';

import { NavItem } from 'widgets/model/types';
import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

import { NavBarItem as NavBarItemEle, NavLink } from './styled';

interface NavBarItemProps extends NavItem, NavBarSizeProps {}

export const NavBarItem = ({ href, text, size = 'large' }: NavBarItemProps) => {
  const location = useLocation();

  return (
    <NavBarItemEle>
      <NavLink size={size} href={href} isActive={location.pathname === href}>
        {text}
      </NavLink>
    </NavBarItemEle>
  );
};
