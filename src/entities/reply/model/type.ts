export interface Reply {
  id: string; // 사용자 아이디
  starScore: number; // 별점
  content: string;
  createdAt: string;
  updatedAt: string;
  profileInfo: {
    name: string;
    profileUrl: string;
  };
}

export type SortType = 'date' | 'starScore' | 'onlyReview';
export type Sort = 'DESC' | 'ASC';
