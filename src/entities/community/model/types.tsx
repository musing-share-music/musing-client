//커뮤니티 리스트

import { Pagination } from 'shared/types/pagination';

//상단리스트
export type RecommendBoardFirstDto = {
  title: string;
  content: string;
  musicName: string;
  artists: Artistboard[];
  rating: number;
  thumbNailLink: string;
};

export type RecommendBoardListDto = {
  title: string;
  musicName: string;
  artists: Artistboard[];
  thumbNailLink: string;
  createAt: string;
}[];

export type BoardPopUpDto = {
  recommendBoardFirstDto: RecommendBoardFirstDto;
  recommendBoardListDto: RecommendBoardListDto;
};

//하단리스트
export type Artistboard = {
  id: number;
  name: string;
  type: 'genre' | 'mood';
};

export type Genreboard = {
  id: number;
  genreName: string;
};

export type Moodboard = {
  id: number;
  moodName: string;
};

export type BoardDtosItem = {
  title: string;
  musicName: string;
  artists: Artistboard[];
  rating: number;
  replyCount: number;
  thumbNailLink: string;
  genreList: Genreboard[];
  moodList: Moodboard[];
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type BoardDtos = {
  content: BoardDtosItem[];
} & Pagination<Sort>;

export type CommunityItem = {
  boardDtos: BoardDtos;
  boardPopUpDto: BoardPopUpDto;
};

// 커뮤니티 상세
export interface BoardDetailDto {
  data: BoardDetail;
  message: string;
}
export interface BoardDetail {
  title: string;
  musicTitle: string;
  artist: string[];
  youtubeLink: string;
  hashtags: string[];
  genre: string[];
  content: string;
  playtime: string;
  songLink: string;
  thumbNailLink: string;
  AlbumName: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  email?: string;
  permitRegister: 'NON_CHECK' | string;
  imageUrl?: string[];
}

export interface DeletePostResponseData {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  content: string;
  recommendCount: number;
  viewCount: number;
  rating: number;
  replyCount: number;
  activeCheck: boolean;
  permitRegister: boolean;
  image: string;
  user: Author; // 작성자
  music: Music;
  replies: Reply[];
  reports: Report[];
}

interface Author {
  id: string;
  username: string;
  email: string;
  profile: string;
  role: string;
  activated: boolean;
  boards: string[];
  playLists: PlayList[];
  moods: Mood[];
  genres: Genre[];
  artists: Artist[];
  replyList: ReplyList[];
  likes: Like[];
  reportBoards: ReportBoard[];
  reportReplies: ReportReply[];
}

interface PlayList {
  id: number;
  listname: string;
  user: string;
}

interface Mood {
  id: number;
  mood: MoodTag;
  user: string;
}

interface MoodTag {
  id: number;
  moodName: string;
}

interface Genre {
  id: number;
  genre: GenreTag;
  user: string;
}

interface GenreTag {
  id: number;
  genreName: string;
}

interface Artist {
  id: number;
  artist: ArtistData;
  user: string;
}

interface ArtistData {
  id: number;
  name: string;
  artistMusics: string[];
}

interface ReplyList {
  createdAt: string;
  updatedAt: string;
  id: number;
  starScore: number;
  content: string;
  user: string;
  board: string;
  reportList: ReportList[];
}

interface ReportList {
  id: number;
  reportDate: string;
  content: string;
  user: string;
  reply: string;
}

interface Like {
  id: number;
  user: string;
  music: string;
}

interface ReportBoard {
  id: number;
  reportDate: string;
  content: string;
  user: string;
  board: string;
}

interface ReportReply {
  id: number;
  reportDate: string;
  content: string;
  user: string;
  reply: string;
}

interface Music {
  id: number;
  name: string;
  playtime: string;
  albumName: string;
  songLink: string;
  thumbNailLink: string;
  moodMusics: MoodMusic[];
  genreMusics: GenreMusic[];
  artists: Artist[];
  boardList: string[];
  hashTagList: HashTagList[];
  preferMusics: PreferMusic[];
}

interface MoodMusic {
  id: number;
  music: string;
  mood: MoodTag;
}

interface GenreMusic {
  id: number;
  music: string;
  genre: GenreTag;
}

interface HashTagList {
  id: number;
  hashtag: string;
  music: string;
}

interface PreferMusic {
  id: number;
  user: string;
  music: string;
}

interface Reply {
  createdAt: string;
  updatedAt: string;
  id: number;
  starScore: number;
  content: string;
  user: string;
  board: string;
  reportList: ReplyReport[];
}

interface ReplyReport {
  id: number;
  reportDate: string;
  content: string;
  user: string;
  reply: string;
}

interface Report {
  id: number;
  reportDate: string;
  content: string;
  user: string;
  board: string;
}
