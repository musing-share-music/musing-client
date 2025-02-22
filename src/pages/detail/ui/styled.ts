import styled from '@emotion/styled';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors[700]};
`;

export const Layout = styled.div`
  display: flex;
  gap: 24px;
`;

export const LeftContainer = styled.div`
  width: 336px;
  min-width: 336px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 840px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
