import { NavItem } from 'shared/types/navbar';

import { IconBox, NavBarItem as NavBarItemEle, NavLink } from './styled';

interface NavBarItemProps extends NavItem {
  size?: 'small' | 'large';
}

export const NavBarItem = ({ href, activeIcon, icon, text, size = 'large' }: NavBarItemProps) => {
  const isSmall = size === 'small';

  return (
    <NavBarItemEle>
      <NavLink as={isSmall ? NavLink.Small : NavLink.Large} href={href} iconActive={activeIcon}>
        <IconBox className={`nav-icon-box ${isSmall ? 'small' : 'large'}`} src={icon} />
        {text}
      </NavLink>
    </NavBarItemEle>
  );
};
