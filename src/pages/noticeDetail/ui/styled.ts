import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 800px;
  background: ${({ theme }) => theme.colors[700]};
`;

export const Layout = styled.div`
  display: flex;
  gap: 24px;
`;
