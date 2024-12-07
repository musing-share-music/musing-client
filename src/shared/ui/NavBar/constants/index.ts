import IconBoardActiveSrc from 'shared/assets/icons/nav-bar/icon-board-active.png';
import IconBoard from 'shared/assets/icons/nav-bar/icon-board.png';
import IconHomeActiveSrc from 'shared/assets/icons/nav-bar/icon-home-active.png';
import IconHomeSrc from 'shared/assets/icons/nav-bar/icon-home.png';
import { NavItem } from 'shared/types/navbar';

export const NAV_ITEM: NavItem[] = [
  {
    text: 'Home',
    href: '#',
    icon: IconHomeSrc,
    activeIcon: IconHomeActiveSrc,
  },
  {
    text: 'Board',
    href: '#',
    icon: IconBoard,
    activeIcon: IconBoardActiveSrc,
  },
  {
    text: 'Notice',
    href: '#',
    icon: IconHomeSrc,
    activeIcon: IconHomeActiveSrc,
  },
];

export const NAV_BAR_WIDTH = 320;
