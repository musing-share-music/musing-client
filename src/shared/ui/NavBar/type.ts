type NavBarSize = 'small' | 'large';

export interface NavBarSizeProps {
  size: NavBarSize;
}

export type NavItem = {
  text: string;
  href: string;
  icon: string;
  activeIcon: string;
};
