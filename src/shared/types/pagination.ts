/**
 * 페이지네이션에 사용되는 타입
 */
export type Pagination<TSort = unknown> = {
  totalPages: number; // 총 페이지 수
  totalElements: number; // 현재 페이지 번호
  last: boolean;
  size: number;
  number: number;
  sort: TSort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
  pageable: {
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: TSort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  };
};
