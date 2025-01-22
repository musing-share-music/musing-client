// 공지사항
export type noticeDto = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
};

// 장르의 음악
export type recommendGenresItem = {
  id: string;
  musicName: string;
  artist: string;
  thumbNailLink: string;
};

export type recommendGenres = recommendGenresItem[];

export type recommendGenreName = string;

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
  artist: string;
  thumbNailLink: string;
};

// 추천 음악 리스트
export type RecommendedMusicList = {
  id: string;
  name: string;
  img: string;
}[];

export type MainItem = {
  noticeDto: noticeDto;
  recommendGenres: recommendGenres;
  LikeMusicList: LikeMusicList;
  HotMusicList: HotMusicList;
  recentBoard: recentBoard;
  hotMusicBoard: hotMusicBoard;
  RecommendedMusicList: RecommendedMusicList;
  recommendGenreName: recommendGenreName;
};
