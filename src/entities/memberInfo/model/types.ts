/* 회원정보 */
export type LikeGenre = {
  id: number;
  genreName: string;
}[];

export type LikeMood = {
  id: number;
  moodName: string;
}[];

export type LikeArtist = {
  id: number;
  name: string;
}[];

export type Artist = {
  id: number;
  name: string;
};

export type BoardDtos = {
  title: string;
  musicName: string;
  artists: Artist[];
  thumbNailLink: string;
  createAt: string;
}[];

export type MusicDto = {
  musicName: string;
  artists: Artist[];
  thumbNailLink: string;
};

export type ReplyDtos = {
  id: number;
  starScore: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  musicDto: MusicDto;
}[];

export type MemberInfoItem = {
  email: string;
  name: string;
  profile: string;
  likeGenre: LikeGenre;
  likeMood: LikeMood;
  likeArtist: LikeArtist;
  boardDtos: BoardDtos;
  replyDtos: ReplyDtos;
};

export type MemberInfo = {
  data: MemberInfoItem;
  message: string;
};

/* 나의 별점 및 리뷰 */
export type ContentItem = {
  id: number;
  starScore: number;
  content: string;
  musicDto: MusicDto;
  createdAt: string;
  updatedAt: string;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type Review = {
  content: ContentItem[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
