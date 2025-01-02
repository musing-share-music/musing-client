import { ROUTES } from 'shared/config/routes';
import { NavItem } from 'shared/ui/AdminNavBar/type';

export const NAV_ITEM: NavItem[] = [
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

export const NAV_BAR_WIDTH = 320;
