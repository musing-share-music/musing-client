import styled from '@emotion/styled';
import { useState } from 'react';

interface PaginationProps {
  totalPages: number; // 총 페이지 수
  activePage?: number; // 현재 페이지 번호
  onClick?: (pageNumber: number) => void; // 페이지 버튼을 클릭했을 때
}

export const Pagination = ({ totalPages, activePage: activePageNumber = 1, onClick }: PaginationProps) => {
  const [activePage, setActivePage] = useState(activePageNumber);

  function handlePageClick(pageNumber: number) {
    if (onClick) {
      onClick(pageNumber);
    }

    setActivePage(pageNumber);
  }
  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <PaginationItem
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          isActive={activePage === pageNumber}
        >
          {pageNumber}
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const PaginationItem = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.colors[100] : theme.colors[200])};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  cursor: pointer;
`;
