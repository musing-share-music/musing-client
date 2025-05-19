// 공지사항
export type NoticeDto = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
};

//장르의 음악 카테고리
export type LikeGenreItem = {
  id: number;
  genreName: string;
};
export type LikeGenre = LikeGenreItem[];

//장르의 음악
export type GenreMusicsItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
  musicLink: string;
};
export type GenreMusics = GenreMusicsItem[];

//좋아요한 음악
export type LikeMusicDtosItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
  musicLink: string;
};
export type LikeMusicDtos = LikeMusicDtosItem[];

// 핫한 음악
export type RecommendGenresItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
  musicLink: string;
};
export type RecommendGenres = RecommendGenresItem[];

// 핫한 음악 장르타이틀
export type RecommendGenre = {
  id: number;
  genreName: string;
};

// 음악 추천 게시판 리스트
export type RecentBoardItem = {
  id: number;
  title: string;
  username: string;
  createdAt: string;
  replyCount: number;
  recommendCount: number;
  viewCount: number;
  musicName: string;
  artist: string;
  thumbNailLink: string;
};
export type RecentBoard = RecentBoardItem[];

// 음악 추천 게시판 정보
export type HotMusicBoard = {
  id: number;
  title: string;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
  musicLink: string;
};

// 추천 음악 리스트
export type RecommendedMusicList = {
  id: number;
  name: string;
  img: string;
}[];

// 선택 모달창
export type PassModal = string;

export type UserInfoDto = {
  userId: string;
  email: string;
  name: string;
  authority: string;
  likeMusicCount: number;
  myPlaylistCount: number;
};

export type MainItem = {
  //공지사항
  noticeDto: NoticeDto;

  //장르의 음악
  likeGenre: LikeGenre; //카테고리
  genreMusics: GenreMusics;

  //좋아요한 음악
  likeMusicDtos: LikeMusicDtos;

  //핫한 음악
  recommendGenre: RecommendGenre; //타이틀
  recommendGenres: RecommendGenres;

  //음악추천게시판
  hotMusicBoard: HotMusicBoard;
  recentBoard: RecentBoard;
  RecommendedMusicList: RecommendedMusicList;

  //모달창
  passModal: PassModal;

  //사용자 정보
  userInfoDto: UserInfoDto;
};
