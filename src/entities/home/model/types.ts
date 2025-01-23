// 공지사항
export type noticeDto = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
};

//장르의 음악 카테고리
export type likeGenreItem = {
  id: number;
  genreName: string;
};
export type likeGenre = likeGenreItem[];

//장르의 음악
export type genreMusicsItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
};
export type genreMusics = genreMusicsItem[];

//좋아요한 음악
export type likeMusicDtosItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
};
export type likeMusicDtos = likeMusicDtosItem[];

// 핫한 음악
export type recommendGenresItem = {
  id: number;
  musicName: string;
  artists: [
    {
      id: number;
      name: string;
    },
  ];
  thumbNailLink: string;
};
export type recommendGenres = recommendGenresItem[];

// 핫한 음악 장르타이틀
export type recommendGenre = {
  id: number;
  genreName: string;
};

// 좋아요한 음악
export type LikeMusicItem = {
  id: string;
  title: string;
  name: string;
  img: string;
};
export type LikeMusicList = LikeMusicItem[];

// 핫한 음악
export type HotMusicItem = {
  id: string;
  title: string;
  name: string;
  img: string;
};
export type HotMusicList = HotMusicItem[];

// 음악 추천 게시판 리스트
export type recentBoardItem = {
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
export type recentBoard = recentBoardItem[];

// 음악 추천 게시판 정보
export type hotMusicBoard = {
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
};

// 추천 음악 리스트
export type RecommendedMusicList = {
  id: string;
  name: string;
  img: string;
}[];

export type MainItem = {
  //공지사항
  noticeDto: noticeDto;

  //장르의 음악
  likeGenre: likeGenre; //카테고리
  genreMusics: genreMusics;

  //좋아요한 음악
  likeMusicDtos: likeMusicDtos;

  recommendGenres: recommendGenres;
  LikeMusicList: LikeMusicList;
  HotMusicList: HotMusicList;
  recentBoard: recentBoard;
  hotMusicBoard: hotMusicBoard;
  RecommendedMusicList: RecommendedMusicList;
  recommendGenreName: recommendGenreName;
};
