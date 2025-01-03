import styled from '@emotion/styled';

export const AdminProfile = () => {
  return (
    <AdminBox>
      <StyledAdminProfile />
      <AdminName>관리자</AdminName>
    </AdminBox>
  );
};
const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 120px;
`;
const StyledAdminProfile = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors[400]};
`;
const AdminName = styled.p`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
