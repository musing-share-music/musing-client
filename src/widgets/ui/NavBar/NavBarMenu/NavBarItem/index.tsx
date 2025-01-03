import { NavItemWithIcon } from 'widgets/model/types';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { IconBox, NavBarItem as NavBarItemEle, NavLink } from './styled';

interface NavBarItemProps extends NavItemWithIcon, NavBarSizeProps {}

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
