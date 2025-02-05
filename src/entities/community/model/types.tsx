export type CommunityListInfo = {
  id: string;
  songinfo: string;
  title: string;
  rateCount: string;
  reviewCount: string;
  img: string;
  tag: CommunityTag[];
}[];

// 커뮤니티 리스트
export type CommunityTag = {
  id: string;
  name: string;
  type: 'genre' | 'mood';
};

export type CommunityItem = {
  CommunityListInfo: CommunityListInfo;
};

// FIXME: 삭제 response 타입을 위해 생성. 상세 조회 api에 타입 재사용 가능한지 확인 필요
// 커뮤니티 상세
export interface CommunityDetail {
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
