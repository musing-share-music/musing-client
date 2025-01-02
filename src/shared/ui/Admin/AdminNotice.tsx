import { Button, Pagination, SearchInputWithFilter, Table } from 'shared/ui';
import { AdminLayout } from 'shared/ui/Layout';

import { noticeSearchFilterOptions } from './searchFilterOptions';
import {
  BoardContainer,
  Container,
  FilterBlock,
  H1,
  Header,
  HoverBox,
  PaginationBlock,
  TableContainer,
} from './styled';

export const AdminNoticePage = () => {
  const tableHead = [
    { key: 'title', content: '제목', width: 40 },
    { key: 'user', content: '작성자', width: 20 },
    { key: 'createdAt', content: '작성일자', width: 20 },
  ] as const;

  const tableData = [
    {
      title: <HoverBox>공지사항 제목</HoverBox>,
      user: '관리자',
      createdAt: '2024-12-03',
    },
    {
      title: <HoverBox>공지사항 제목</HoverBox>,
      user: '관리자',
      createdAt: '2024-12-03',
    },
    {
      title: <HoverBox>공지사항 제목</HoverBox>,
      user: '관리자',
      createdAt: '2024-12-03',
    },
  ];

  return (
    <AdminLayout>
      <Container>
        <BoardContainer>
          <Header>
            <H1>공지사항</H1>
            <Button width={132} variant="primaryOutline">
              작성
            </Button>
          </Header>
          <TableContainer>
            <Table head={tableHead} data={tableData} />
          </TableContainer>
          <PaginationBlock>
            <Pagination />
          </PaginationBlock>
        </BoardContainer>
        <FilterBlock>
          <SearchInputWithFilter
            options={noticeSearchFilterOptions}
            searchFilterPlaceholder="작성자"
            placeholder="내용을 입력해 주세요."
          />
        </FilterBlock>
      </Container>
    </AdminLayout>
  );
};
