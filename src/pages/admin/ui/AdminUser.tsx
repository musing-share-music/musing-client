import styled from '@emotion/styled';

import { userSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { AdminLayout } from 'widgets/ui/Layout';

import { Button, Filter, Pagination, SearchInputWithFilter, Table } from 'shared/ui';

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

export const AdminUserPage = () => {
  const tableHead = [
    { key: 'userId', content: '회원 ID', width: 20 },
    { key: 'active', content: '활동 상태', width: 30 },
    { key: 'deletedAt', content: '정지일자', width: 20 },
    {
      key: 'sort',
      content: (
        <Filter
          width={56}
          placeholder="전체"
          options={[
            { label: '전체', value: '0' },
            { label: '정지', value: '0' },
          ]}
        />
      ),
      width: 20,
    },
  ] as const;

  const tableData = [
    {
      userId: <HoverBox> John Doe</HoverBox>,
      active: <ActiveStateBox isActive={false}>일반</ActiveStateBox>,
      deletedAt: '-',
      sort: (
        <Button width={48} height={33} variant="outlined">
          정지
        </Button>
      ),
    },
    {
      userId: <HoverBox> Jane Do</HoverBox>,
      active: <ActiveStateBox isActive>정지</ActiveStateBox>,
      deletedAt: '-',
      sort: (
        <Button width={48} height={3} variant="outlined">
          정지
        </Button>
      ),
    },
    {
      userId: <HoverBox> John Doe</HoverBox>,
      active: <ActiveStateBox isActive={false}>일반</ActiveStateBox>,
      deletedAt: '-',
      sort: (
        <Button width={48} height={33} variant="outlined">
          정지
        </Button>
      ),
    },
    {
      userId: <HoverBox> Jane Doe</HoverBox>,
      active: '일반',
      deletedAt: '-',
      sort: (
        <Button width={48} height={33} variant="outlined">
          정지
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <Container>
        <BoardContainer>
          <Header>
            <H1>회원 조회</H1>
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
            options={userSearchFilterOptions}
            searchFilterPlaceholder="회원 ID"
            placeholder="내용을 입력해 주세요."
          />
        </FilterBlock>
      </Container>
    </AdminLayout>
  );
};

const ActiveStateBox = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary1 : theme.colors[200])};
`;
