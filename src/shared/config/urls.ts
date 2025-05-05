const URL = {
  // 클라이언트 관련 URL
  BASEURL: 'http://localhost:3000/',

  // 서버 관련 URL
  SERVERURL: 'http://localhost:8090/',

  // 구글 로그인 URL
  GOOGLELOGIN: 'http://localhost:8090/oauth2/authorization/google',

  // 서버 API
  API: {
    MAIN: 'musing/main', //메인
    LOGOUT: 'musing/logout', //로그아웃
    GENREMODAL: 'musing/modal/like/genres', //장르모달
    MOODMODAL: 'musing/modal/like/moods', //무드모달
    ARTISTMODAL: 'musing/modal/like/artists', //아티스트모달
    GENRE: 'musing/main/genre', //장르
    LIST: 'musing/board/list', //게시판
    LISTPAGE: 'musing/board/list/page', //게시판페이지
    LISTSEARCH: 'musing/board/list/page/search', //게시판페이지검색
    BOARD_CREATE: 'musing/board/create', // 게시글 작성
    BOARD_DELETE: 'musing/board/deletePost', // 게시글 삭제
    BOARD_DETAIL: 'musing/board/selectDetail', // 게시글 상세 조회
    VALIDATE_YOUTUBE_URL: 'checkURL', // 유튜브 url 검증
    REPLY: (boardId: number) => `/musing/board/${boardId}/reply`, // 리뷰 조회
    NOTICE: 'musing/notice/list', // 공지사항 리스트
    NOTICE_DETAIL: 'musing/notice', // 공지사항 상세 페이지

    // 회원정보
    MEMBERINFO: {
      INFO: 'musing/user',
      COMMUNITY: 'musing/user/my-board', //음악 추천 게시글
      COMMUNITYSEARCH: 'musing/user/my-board/search', //조회
      REVIEW: 'musing/user/my-reply', // 리뷰 및 별점
      REVIEWSEARCH: 'musing/user/my-reply/search', //조회
      GENREMODIFY: 'musing/user/like/genre', //장르수정
      MOODMODIFY: 'musing/user/like/mood', //무드수정
      ARTISTMODIFY: 'musing/user/like/artist ', //아티스트수정
    },

    // 관리자
    ADMIN: {
      INFO: 'musing/admin/info', // 관리자 정보
      NOTICE: 'musing/admin/notice', // 공지사항
      DELETE_NOTICE: 'musing/admin/notice/remove', // 공지사항 삭제
      PERMIT_BOARD_LIST: 'musing/admin/board/list', // 승인 대기 게시글 리스트
      PERMIT_BOARD_SEARCH: 'musing/admin/board/list/search', // 승인 대기 게시글 검색
      PERMIT_BOARD: 'musing/admin/board/permit', // 게시글 승인
      REJECT_BOARD: 'musing/admin/board/non/permit', // 게시글 승인 거절
      REMOVED_BOARD_LIST: 'musing/admin/board/list/removed', // 삭제된 게시글 리스트
      REMOVED_BOARD_DETAIL: 'musing/admin/board/list/removed/detail', // 삭제된 게시글 상세
    },

    // 플레이리스트
    PLAYLIST: {
      LIST: 'musing/playlist/playlist',
    },

    TOKENREISSUE: 'musing/auth/reissue', //토큰 재발급
  } as const,
};

export default URL;
