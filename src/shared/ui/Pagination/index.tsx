import styled from '@emotion/styled';
import { SetStateAction, useState } from 'react';

export const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  function handlePageClick(pageNumber: SetStateAction<number>) {
    setActivePage(pageNumber);
  }
  return (
    <PaginationContainer>
      {[1, 2, 3, 4, 5].map((pageNumber) => (
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
