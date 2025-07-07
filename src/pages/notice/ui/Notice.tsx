import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { noticeSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { notice } from 'entities/notice/api/notice.query';

import { ROUTES } from 'shared/config/routes';
import { useUserInfoStore } from 'shared/store/userInfo';
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

const tableHead = [
  { key: 'title', content: '제목', width: 40 },
  { key: 'username', content: '작성자', width: 20 },
  { key: 'createdAt', content: '작성일자', width: 20 },
] as const;

export const NoticePage = () => {
  const [activePage, setActivePage] = useState(1);
  const [inputSearch, setInputSearch] = useState<string>('');

  const { data: listData, isLoading } = useQuery({
    ...notice.list({ page: activePage }),
    select: (data) => data.data,
  });

  const { data: searchResult } = useQuery({
    ...notice.search({ page: 1, keyword: inputSearch }),
    enabled: inputSearch.trim() !== '',
    select: (data) => data.data,
  });

  const content = inputSearch.trim() ? searchResult?.content || [] : listData?.content || [];

  const totalPages = listData?.totalPages || 1;

  const { userInfo } = useUserInfoStore();
  const isAdmin = userInfo.authority === 'ADMIN';

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
    <Container>
      <BoardContainer>
        <Header>
          <H1>공지사항</H1>
          {isAdmin && (
            <Button width={132} variant="primaryOutline">
              작성
            </Button>
          )}
        </Header>
        <TableContainer>
          <Table head={tableHead} data={tableData} isLoading={isLoading} />
        </TableContainer>
        {inputSearch.trim() === '' && (
          <PaginationBlock>
            <Pagination totalPages={totalPages} activePage={activePage} onClick={handlePageClick} />
          </PaginationBlock>
        )}
      </BoardContainer>
      <FilterBlock>
        <SearchInputWithFilter
          options={noticeSearchFilterOptions}
          searchFilterPlaceholder="제목"
          placeholder="내용을 입력해 주세요."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </FilterBlock>
    </Container>
  );
};
