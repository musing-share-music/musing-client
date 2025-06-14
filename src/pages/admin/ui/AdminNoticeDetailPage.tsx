import styled from '@emotion/styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { fetchRemoveNotice } from 'entities/notice/api';
import { adminNotice, notice } from 'entities/notice/api/notice.query';

import { ROUTES } from 'shared/config/routes';
import { ConfirmModal } from 'shared/ui/Modal';

export const AdminNoticeDetailPage = () => {
  const params = useParams();
  const noticeId = Number(params.id);

  const { data, isLoading } = useQuery({
    ...notice.detail(noticeId),
    enabled: !isNaN(noticeId),
    select: (data) => data.data,
  });

  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: fetchRemoveNotice,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: adminNotice._def });
      await navigate(ROUTES.ADMIN.NOTICE);
    },
  });

  const handleClickModal = () => {
    setOpen(true);
  };

  return (
    <Layout>
      {!isLoading && data ? (
        <Section>
          <Header>
            <TitleBlock>
              <Title>{data.title}</Title>
              <ButtonBox>
                <Button onClick={handleClickModal}>삭제</Button>
                <StyledLink to={`/admin/update-notice/${noticeId}`}>편집</StyledLink>
              </ButtonBox>
            </TitleBlock>
            <InfoBlock>
              <Author>작성자 {data.username}</Author>
              <CreatedAt>작성일 {new Date(data.createdAt).toLocaleDateString()}</CreatedAt>
            </InfoBlock>
          </Header>

          <Body>
            {data.imageUrl?.map((url, index) => (
              <img key={index} src={url} alt="notice" />
            ))}
            <TextBox>{data.content}</TextBox>
          </Body>

          <ConfirmModal
            text="정말 삭제하시겠습니까?"
            confirmText="삭제하기"
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={() => deleteMutation.mutate({ noticeId: data.id })}
          />
        </Section>
      ) : null}
    </Layout>
  );
};

const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 800px;
  background: ${({ theme }) => theme.colors[700]};
`;

const Layout = styled.div`
  display: flex;
  gap: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;
`;

const Button = styled.button`
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
`;

const StyledLink = styled(Link)`
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
`;

const Header = styled.section`
  display: flex;
  width: 100%;
  padding: 44px 48px 52px 48px;
  gap: 10px;
  flex-direction: column;
  height: fit-content;
  background: ${({ theme }) => theme.colors[700]};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;
const TitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Title = styled.h1`
  max-width: 570px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;
const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Author = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;
const CreatedAt = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 32px 32px 48px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors[700]};
`;
const TextBox = styled.div`
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B7};
  white-space: pre-wrap;
`;
