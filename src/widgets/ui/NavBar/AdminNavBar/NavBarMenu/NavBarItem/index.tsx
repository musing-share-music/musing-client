import { useLocation } from 'react-router-dom';

import { NavItem } from 'widgets/model/types';
import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

import { NavBarItem as NavBarItemEle, NavButton, NavLink, SubNavLink } from './styled';

interface NavBarItemProps extends Partial<NavItem>, NavBarSizeProps {
  onClick?: () => void;
}

export const NavBarItem = ({ href, text, size = 'large', onClick }: NavBarItemProps) => {
  const location = useLocation();

  const isHref = !!href;

  return (
    <NavBarItemEle>
      {isHref && (
        <NavLink size={size} href={href} isActive={location.pathname === href}>
          {text}
        </NavLink>
      )}
      {!isHref && (
        <NavButton size={size} isActive={location.pathname === href} onClick={onClick}>
          {text}
        </NavButton>
      )}
    </NavBarItemEle>
  );
};

// Nav의 서브 아이템
export const SubNavBarItem = ({ href, text, size = 'large' }: NavBarItemProps) => {
  const location = useLocation();

  return (
    <NavBarItemEle>
      <SubNavLink size={size} href={href} isActive={location.pathname === href}>
        {text}
      </SubNavLink>
    </NavBarItemEle>
  );
};
