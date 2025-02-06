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
  },
};

export default URL;
