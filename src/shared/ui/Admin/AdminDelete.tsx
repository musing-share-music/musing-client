import { AdminLayout } from 'widgets/ui/Layout';

import { Pagination, SearchInputWithFilter, Table } from 'shared/ui';

import { deletedSearchFilterOptions } from './searchFilterOptions';
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

export const AdminDeletedPage = () => {
  const tableHead = [
    { key: 'title', content: '제목', width: 40 },
    { key: 'user', content: '작성자', width: 20 },
    { key: 'createdAt', content: '작성일자', width: 20 },
  ] as const;

  const tableData = [
    {
      title: <HoverBox>게시글 제목</HoverBox>,
      user: '회원ID',
      createdAt: '2024-12-03',
    },
    {
      title: <HoverBox>게시글 제목</HoverBox>,
      user: '회원ID',
      createdAt: '2024-12-03',
    },
    {
      title: <HoverBox>게시글 제목</HoverBox>,
      user: '회원ID',
      createdAt: '2024-12-03',
    },
  ];

  return (
    <AdminLayout>
      <Container>
        <BoardContainer>
          <Header>
            <H1>관리자 확인</H1>
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
            options={deletedSearchFilterOptions}
            searchFilterPlaceholder="작성자"
            placeholder="내용을 입력해 주세요."
          />
        </FilterBlock>
      </Container>
    </AdminLayout>
  );
};
