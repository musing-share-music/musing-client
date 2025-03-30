import { Pagination } from 'shared/types/pagination';

export interface FetchGetBoardListResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: {
      id: number;
      title: string;
      username: string;
      createdAt: string;
    }[];
    number: number;
    sort: {
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    }[];
    pageable: Pagination;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
  message: string;
}
