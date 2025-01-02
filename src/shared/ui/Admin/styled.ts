import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 60px auto 0;
  width: 1024px;
`;

export const BoardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 44px 52px;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

export const PaginationBlock = styled.div`
  margin-top: 24px;
  padding-bottom: 40px;
`;
export const TableContainer = styled.div``;
export const FilterBlock = styled.div`
  margin-top: 40px;
  padding: 0 68px;
  display: flex;
  gap: 20px;
`;

export const HoverBox = styled.div`
  width: fit-content;
  ${({ theme }) => theme.fonts.wantedSans.B3}
  color: ${({ theme }) => theme.colors[100]};

  &:hover {
    -webkit-box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors[100]};
    -moz-box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors[100]};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors[100]};
  }
`;
