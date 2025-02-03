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
