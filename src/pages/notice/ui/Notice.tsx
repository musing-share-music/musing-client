import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { noticeSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { MainLayout } from 'widgets/ui';

import { fetchGetNotice } from 'entities/notice/api';

import { ROUTES } from 'shared/config/routes';
import { Button, Pagination, SearchInputWithFilter, Table } from 'shared/ui';

import {
  BoardContainer,
  Container,
  FilterBlock,
  H1,
  Header,
  HoverBox,
  PaginationBlock,
  StyledLink,
  TableContainer,
} from './styled';

export const NoticePage = () => {
  const [activePage, setActivePage] = useState(1); // 현재 페이지 번호

  const { data, isLoading } = useQuery({
    queryKey: ['notice', 'list'],
    queryFn: () => fetchGetNotice({ page: activePage }),
    select: (data) => data.data,
  });

  const tableHead = [
    { key: 'title', content: '제목', width: 40 },
    { key: 'username', content: '작성자', width: 20 },
    { key: 'createdAt', content: '작성일자', width: 20 },
  ] as const;

  const content = data?.content || [];
  const totalPages = data?.totalPages || 1; // 전체 페이지 수

  const tableData = content.map(({ id, title, username, createdAt }) => {
    return {
      title: (
        <HoverBox>
          <StyledLink to={`${ROUTES.NOTICE}/${id}`}>{title}</StyledLink>
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
    <MainLayout>
      <Container>
        <BoardContainer>
          <Header>
            <H1>공지사항</H1>
            <Button width={132} variant="primaryOutline">
              작성
            </Button>
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
            options={noticeSearchFilterOptions}
            searchFilterPlaceholder="작성자"
            placeholder="내용을 입력해 주세요."
          />
        </FilterBlock>
      </Container>
    </MainLayout>
  );
};
