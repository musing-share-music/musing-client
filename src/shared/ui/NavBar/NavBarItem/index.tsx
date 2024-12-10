import { NavBarSizeProps, NavItem } from '../type';
import { IconBox, NavBarItem as NavBarItemEle, NavLink } from './styled';

interface NavBarItemProps extends NavItem, NavBarSizeProps {}

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
