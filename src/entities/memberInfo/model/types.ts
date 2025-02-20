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
