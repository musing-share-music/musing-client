import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { reportSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { ROUTES } from 'shared/config/routes';
import { Button, Filter, Pagination, SearchInputWithFilter, Table } from 'shared/ui';
import { ConfirmModal } from 'shared/ui/Modal';

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

export const AdminPostReportPage = () => {
  const [open, setOpen] = useState(false); // 모달 open 상태
  const navigate = useNavigate();

  const tableHead = [
    { key: 'title', content: '제목', width: 40 },
    { key: 'userId', content: '작성자', width: 10 },
    { key: 'reportedAt', content: '신고일자', width: 10 },
    { key: 'reason', content: '신고사유', width: 10 },

    {
      key: 'sort',
      content: (
        <Filter
          placeholder="전체"
          options={[
            { label: '전체', value: '0' },
            { label: '정지', value: '0' },
          ]}
        />
      ),
      width: 10,
    },
  ] as const;

  const tableData = [
    {
      title: <HoverBox>[신고] 불법 사이트 홍보</HoverBox>,
      userId: '회원 ID',
      reportedAt: '2024-12-03',
      reason: '신고사유',
      sort: (
        <Button onClick={() => setOpen(true)} width={48} height={33} variant="outlined">
          <DeleteButtonText>삭제</DeleteButtonText>
        </Button>
      ),
    },
    {
      title: <HoverBox>[신고] 불법 사이트 홍보</HoverBox>,
      userId: '회원 ID',
      reportedAt: '2024-12-03',
      reason: '신고사유',
      sort: (
        <Button onClick={() => setOpen(true)} width={48} height={33} variant="outlined">
          <DeleteButtonText>삭제</DeleteButtonText>
        </Button>
      ),
    },
    {
      title: <HoverBox>[신고] 불법 사이트 홍보</HoverBox>,
      userId: '회원 ID',
      reportedAt: '2024-12-03',
      reason: '신고사유',
      sort: (
        <Button onClick={() => setOpen(true)} width={48} height={33} variant="outlined">
          <DeleteButtonText> 삭제</DeleteButtonText>
        </Button>
      ),
    },
    {
      title: <HoverBox>[신고] 불법 사이트 홍보</HoverBox>,
      userId: '회원 ID',
      reportedAt: '2024-12-03',
      reason: '신고사유',
      sort: (
        <Button onClick={() => setOpen(true)} width={48} height={33} variant="outlined">
          <DeleteButtonText> 삭제</DeleteButtonText>
        </Button>
      ),
    },
  ];

  const isPost = true;
  const toggleMenu = async () => {
    await navigate(ROUTES.ADMIN.REVIEW_REPORT); // 댓글 신고 접수 페이지로 이동
  };

  return (
    <>
      <Container>
        <BoardContainer>
          <Header>
            <H1>신고 접수</H1>
            <OptionBox>
              <OptionButton isActive={isPost}>게시글</OptionButton>
              <OptionDivider />
              <OptionButton isActive={!isPost} onClick={toggleMenu}>
                댓글
              </OptionButton>
            </OptionBox>
          </Header>
          <TableContainer>
            <Table head={tableHead} data={tableData} />
          </TableContainer>
          <PaginationBlock>
            <Pagination totalPages={0} />
          </PaginationBlock>
        </BoardContainer>
        <FilterBlock>
          <SearchInputWithFilter
            options={reportSearchFilterOptions}
            searchFilterPlaceholder="작성자"
            placeholder="내용을 입력해 주세요."
          />
        </FilterBlock>
      </Container>
      <ConfirmModal
        text={`정말 ${isPost ? '게시글' : '댓글'}을
        삭제하시겠어요?`}
        confirmText="삭제하기"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onConfirm={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const OptionBox = styled.div`
  display: flex;
  gap: 20px;
`;
const OptionDivider = styled.div`
  margin: 10px 0;
  border: 0.5px solid ${({ theme }) => theme.colors[400]};
`;
const OptionButton = styled.button<{ isActive?: boolean }>`
  padding: 0;
  margin: 0;
  border: none;
  color: ${({ isActive, theme }) => (isActive ? theme.colors[100] : theme.colors[400])};
  cursor: pointer;
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

const DeleteButtonText = styled.span`
  color: ${({ theme }) => theme.colors.secondary1};
`;
