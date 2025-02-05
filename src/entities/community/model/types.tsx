//상단리스트
export type recommendBoardFirstDto = {
  title: string;
  content: string;
  musicName: string;
  artists: Artist[];
  rating: number;
  thumbNailLink: string;
};

export type recommendBoardListDto = {
  title: string;
  musicName: string;
  artists: Artist[];
  thumbNailLink: string;
  createAt: string;
}[];

export type boardPopUpDto = {
  recommendBoardFirstDto: recommendBoardFirstDto;
  recommendBoardListDto: recommendBoardListDto;
};

//하단리스트
export type Artist = {
  id: number;
  name: string;
};

export type Genre = {
  id: number;
  genreName: string;
};

export type Mood = {
  id: number;
  moodName: string;
};

export type boardDtosItem = {
  title: string;
  musicName: string;
  artists: Artist[];
  rating: number;
  replyCount: number;
  thumbNailLink: string;
  genreList: Genre[];
  moodList: Mood[];
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type boardDtos = {
  content: boardDtosItem[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export type CommunityItem = {
  boardDtos: boardDtos;
};
