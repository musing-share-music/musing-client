export interface Notice {
  totalPages: number; // 전체 페이지 수
  totalElements: number;
  size: number;
  content: Content[];
  number: number;
  sort: Sort[];
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Content {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
  imageUrl: string[];
}

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}
