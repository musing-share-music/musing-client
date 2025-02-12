import styled from '@emotion/styled';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors[700]};
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 840px;
`;
