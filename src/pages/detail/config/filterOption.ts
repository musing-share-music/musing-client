import { Sort, SortType } from 'entities/reply/model/type';

export const REVIEW_FILTER_OPTIONS: { label: string; value: { sortType: SortType; sort: Sort } }[] = [
  {
    label: '전체',
    value: {
      sortType: 'date',
      sort: 'ASC',
    },
  },
  {
    label: '최신순',
    value: {
      sortType: 'date',
      sort: 'ASC',
    },
  },
  {
    label: '오래된순',
    value: {
      sortType: 'date',
      sort: 'DESC',
    },
  },
  {
    label: '별점 높은순',
    value: {
      sortType: 'starScore',
      sort: 'DESC',
    },
  },
  {
    label: '별점 낮은순',
    value: {
      sortType: 'starScore',
      sort: 'ASC',
    },
  },
  {
    label: '리뷰만 보기',
    value: {
      sortType: 'onlyReview',
      sort: 'ASC',
    },
  },
];
