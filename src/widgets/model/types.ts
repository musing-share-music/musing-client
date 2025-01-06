export type NavItem = {
  text: string;
  href: string;
};

export type NavItemWithIcon = NavItem & {
  icon: string;
  activeIcon: string;
};

export type NavBarSize = 'small' | 'large';
