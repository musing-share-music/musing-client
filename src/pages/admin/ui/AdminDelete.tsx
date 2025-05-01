import { useState } from 'react';

import { deletedSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { useAdminDeletedBoardList } from 'entities/adminDeleted/api/adminDeleted.query';

import { Pagination, SearchInputWithFilter, Table } from 'shared/ui';
import { StyledLink } from 'shared/ui/admin';

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

const tableHead = [
  { key: 'title', content: '제목', width: 40 },
  { key: 'username', content: '작성자', width: 20 },
  { key: 'createdAt', content: '작성일자', width: 20 },
] as const;

export const AdminDeletedPage = () => {
  const [activePage, setActivePage] = useState(1); // 현재 페이지 번호

  const { data, isLoading } = useAdminDeletedBoardList();

  const content = data?.content || [];
  const totalPages = data?.totalPages || 1; // 전체 페이지 수

  const tableData = content.map(({ id, title, username, createdAt }) => {
    return {
      title: (
        <HoverBox>
          {title}
          <StyledLink to={`/admin/deleted/${id}`}>{title}</StyledLink>
        </HoverBox>
      ),
      username,
      createdAt: new Date(createdAt).toLocaleDateString(),
    };
  });

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <Container>
      <BoardContainer>
        <Header>
          <H1>삭제된 게시글 조회</H1>
        </Header>
        <TableContainer>
          <Table head={tableHead} data={tableData} isLoading={isLoading} />
        </TableContainer>
        <PaginationBlock>
          <Pagination totalPages={totalPages} activePage={activePage} onClick={handlePageClick} />
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
  );
};
