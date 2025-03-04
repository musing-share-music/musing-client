/**
 * 애플리케이션의 모든 라우트 경로를 중앙 집중식으로 관리
 */
export const ROUTES = {
  // 공용 라우트
  HOME: '/',
  NOT_FOUND: '*',

  // 커뮤니티
  COMMUNITY: {
    COMMUNITY: '/community',
    DETAIL: '/detail',
  },

  // 컴포넌트 demo용 페이지
  DEMO: '/demo',

  // 음악 추천 게시판 상세
  DETAIL: '/detail/:id',

  // 음악 추천 글 작성
  CREATE: '/create',

  //플레이리스트
  PLAYLIST: '/playlist',

  //회원정보
  MEMBERINFO: {
    MEMBERINFO: '/memberinfo',
    MEMBERINFOCOMMUNITY: '/memberinfo/community',
    MEMBERINFOREVIEW: '/memberinfo/review',
  },

  // 공지사항
  NOTICE: '/notice',
  NOTICE_DETAIL: '/notice/:id',

  // 관리자
  ADMIN: {
    USER: '/admin/user', // 회원 조회
    POST_REPORT: '/admin/post-report', // 게시글 신고 접수
    REVIEW_REPORT: '/admin/review-report', // 댓글 신고 접수
    NOTICE: '/admin/notice', // 공지사항
    CREATE_NOTICE: '/admin/create-notice', // 공지사항 작성
    NOTICE_DETAIL: '/admin/notice/:id', // 공지사항 상세
    UPDATE_NOTICE: '/admin/update-notice/:id', // 공지사항 수정
    CHECK: '/admin/check', // 관리자 확인
    DELETED: '/admin/deleted', // 삭제된 게시글 조회
  },
} as const;

// 라우트 타입 추출 (선택사항)
export type RouteKey = keyof typeof ROUTES;
