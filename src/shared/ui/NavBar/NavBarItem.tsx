import { NavItem } from 'shared/types/navbar';

import { NavBarSize } from '.';
import { IconBox, NavBarItem as NavBarItemEle, NavLink } from './styled';

interface NavBarItemProps extends NavItem {
  size?: NavBarSize;
}

export const NavBarItem = ({ href, activeIcon, icon, text, size = 'large' }: NavBarItemProps) => {
  return (
    <NavBarItemEle>
      <NavLink size={size} href={href} iconActive={activeIcon}>
        <IconBox src={icon} />
        {text}
      </NavLink>
    </NavBarItemEle>
  );
};
