import { AdminNavItem, NavItemWithIcon } from 'widgets/model/types';

import IconBoardActiveSrc from 'shared/assets/image/icons/nav-bar/icon-board-active.png';
import IconBoard from 'shared/assets/image/icons/nav-bar/icon-board.png';
import IconHomeActiveSrc from 'shared/assets/image/icons/nav-bar/icon-home-active.png';
import IconHomeSrc from 'shared/assets/image/icons/nav-bar/icon-home.png';
import { ROUTES } from 'shared/config/routes';

export const ADMIN_NAV_ITEM: AdminNavItem[] = [
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
    href: ROUTES.ADMIN.PERMIT,
  },
  {
    text: '신고 접수',
    children: [
      { text: '게시글', href: ROUTES.ADMIN.POST_REPORT },
      { text: '댓글', href: ROUTES.ADMIN.REVIEW_REPORT },
    ],
  },
  {
    text: '삭제된 게시글 조회',
    href: ROUTES.ADMIN.DELETED,
  },
];

export const NAV_ITEM: NavItemWithIcon[] = [
  {
    text: 'Home',
    href: ROUTES.HOME,
    icon: IconHomeSrc,
    activeIcon: IconHomeActiveSrc,
  },
  {
    text: 'Board',
    href: ROUTES.COMMUNITY.COMMUNITY,
    icon: IconBoard,
    activeIcon: IconBoardActiveSrc,
  },
  {
    text: 'Notice',
    href: ROUTES.NOTICE,
    icon: IconHomeSrc,
    activeIcon: IconHomeActiveSrc,
  },
];
