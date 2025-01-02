import { useLocation } from 'react-router-dom';

import { NavBarSizeProps, NavItem } from 'shared/ui/AdminNavBar/type';

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
