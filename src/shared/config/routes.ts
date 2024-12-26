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

  // 음악 추천 게시
  CREATE: '/create'

  // 인증 관련 라우트
  // AUTH: {
  //   LOGIN: '/login',
  //   REGISTER: '/register',
  //   FORGOT_PASSWORD: '/forgot-password',
  // }
} as const;

// 라우트 타입 추출 (선택사항)
export type RouteKey = keyof typeof ROUTES;
