import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { reportSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { adminReportBoard, useDeleteReportedBoard } from 'entities/adminReport/api/queries';

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
  StyledLink,
  TableContainer,
} from './styled';

export const AdminPostReportPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedBoardId, setSelectedBoardId] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    ...adminReportBoard.list(activePage),
    select: (data) => data.data,
  });

  const deleteReportedBoardMutation = useDeleteReportedBoard();

  const content = data?.content || [];
  const totalPages = data?.totalPages || 1; // 전체 페이지 수

  const tableHead = [
    { key: 'title', content: '제목', width: 40 },
    { key: 'username', content: '작성자', width: 10 },
    { key: 'reportDate', content: '신고일자', width: 10 },
    { key: 'content', content: '신고사유', width: 10 },
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

  const tableData = content.map((report) => ({
    title: (
      <HoverBox>
        <StyledLink to={`/detail/${report.boardId}`}>{report.boardTitle}</StyledLink>
      </HoverBox>
    ),
    username: report.username,
    content: report.content,
    reportDate: new Date(report.reportDate).toLocaleDateString(),
    sort: (
      <Button
        onClick={() => {
          setSelectedBoardId(report.boardId);
          setOpen(true);
        }}
        width={48}
        height={33}
        variant="outlined"
      >
        <DeleteButtonText>삭제</DeleteButtonText>
      </Button>
    ),
  }));

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handleDelete = async () => {
    if (!selectedBoardId || deleteReportedBoardMutation.isPending) return;
    try {
      await deleteReportedBoardMutation.mutateAsync(selectedBoardId);
      setOpen(false);
      setSelectedBoardId(null);
    } catch (error) {
      console.error('Failed to delete board:', error);
    }
  };

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
            <Table head={tableHead} data={tableData} isLoading={isLoading} />
          </TableContainer>
          <PaginationBlock>
            <Pagination totalPages={totalPages} activePage={activePage} onClick={handlePageClick} />
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
        text={`정말 게시글을 삭제하시겠어요?`}
        confirmText="삭제하기"
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedBoardId(null);
        }}
        onConfirm={handleDelete}
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
