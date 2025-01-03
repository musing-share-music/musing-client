import { NavItem, NavItemWithIcon } from 'widgets/model/types';

import IconBoardActiveSrc from 'shared/assets/image/icons/nav-bar/icon-board-active.png';
import IconBoard from 'shared/assets/image/icons/nav-bar/icon-board.png';
import IconHomeActiveSrc from 'shared/assets/image/icons/nav-bar/icon-home-active.png';
import IconHomeSrc from 'shared/assets/image/icons/nav-bar/icon-home.png';
import { ROUTES } from 'shared/config/routes';

export const ADMIN_NAV_ITEM: NavItem[] = [
  {
    text: '공지사항',
    href: ROUTES.ADMIN.NOTICE,
  },
  {
    text: '회원조회',
    href: ROUTES.ADMIN.USER,
  },
  {
    text: '관리자확인',
    href: ROUTES.ADMIN.CHECK,
  },
  {
    text: '신고 접수',
    href: ROUTES.ADMIN.REPORT,
  },
  {
    text: '삭제된 게시글 조회',
    href: ROUTES.ADMIN.DELETED,
  },
];

export const NAV_ITEM: NavItemWithIcon[] = [
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
