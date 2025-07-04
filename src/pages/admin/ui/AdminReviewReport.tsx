import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { reportSearchFilterOptions } from 'pages/admin/config/searchFilterOptions';

import { adminReportReply, useDeleteReportedReply } from 'entities/adminReport/api/queries';

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

export const AdminReviewReportPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedReplyId, setSelectedReplyId] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(1);

  const { data, isLoading } = useQuery({
    ...adminReportReply.list(activePage),
    select: (data) => data.data,
  });

  const deleteReportedReplyMutation = useDeleteReportedReply();

  const content = data?.content || [];
  const totalPages = data?.totalPages || 1;

  const tableHead = [
    { key: 'replyContent', content: '댓글 내용', width: 40 },
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
    replyContent: <HoverBox>{report.replyContent}</HoverBox>,
    username: report.username,
    reportDate: new Date(report.reportDate).toLocaleDateString(),
    content: report.content,
    sort: (
      <Button
        onClick={() => {
          setSelectedReplyId(report.replyId);
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

  const handleDelete = async () => {
    if (!selectedReplyId || deleteReportedReplyMutation.isPending) return;

    try {
      await deleteReportedReplyMutation.mutateAsync(selectedReplyId);
      setOpen(false);
      setSelectedReplyId(null);
    } catch (error) {
      console.error('Failed to delete reply:', error);
    }
  };

  const isPost = false;
  const toggleMenu = async () => {
    await navigate(ROUTES.ADMIN.POST_REPORT); // 게시글 신고 접수 페이지로 이동
  };

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Container>
        <BoardContainer>
          <Header>
            <H1>신고 접수</H1>
            <OptionBox>
              <OptionButton isActive={isPost} onClick={toggleMenu}>
                게시글
              </OptionButton>
              <OptionDivider />
              <OptionButton isActive={!isPost}>댓글</OptionButton>
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
        text="정말 댓글을 삭제하시겠어요?"
        confirmText="삭제하기"
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedReplyId(null);
        }}
        onConfirm={handleDelete}
      />
    </>
  );
};

const DeleteButtonText = styled.span`
  color: ${({ theme }) => theme.colors.secondary1};
`;

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
