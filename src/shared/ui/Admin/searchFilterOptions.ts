import { Option } from 'shared/ui/Input/SearchInputWithFilter';

// 회원 조회 검색 필터 옵션
export const userSearchFilterOptions: Option[] = [
  {
    label: '회원 ID',
    value: 'userId',
  },
  {
    label: '회원 ID',
    value: 'userId',
  },
];

// 공지사항 검색 필터 옵션
export const noticeSearchFilterOptions: Option[] = [
  {
    label: '제목',
    value: 'title',
  },
];

// 관리자 확인 검색 필터 옵션
export const checkSearchFilterOptions: Option[] = [
  {
    label: '제목',
    value: 'title',
  },
  {
    label: '작성자',
    value: 'userId',
  },
];

// 삭제된 게시글 조회 검색 필터 옵션
export const deletedSearchFilterOptions: Option[] = [
  {
    label: '제목',
    value: 'title',
  },
  {
    label: '작성자',
    value: 'userId',
  },
];

// 신고 조회 검색 필터 옵션
export const reportSearchFilterOptions: Option[] = [
  {
    label: '신고일자',
    value: 'reportedAt',
  },
  {
    label: '신고사유',
    value: 'reason',
  },
];
