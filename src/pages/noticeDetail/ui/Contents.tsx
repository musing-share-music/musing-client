import styled from '@emotion/styled';

import { Content } from 'entities/notice/model';

import { Section } from './styled';

interface ContentsProps {
  data: Content;
}

export const Contents = ({ data }: ContentsProps) => {
  return (
    <Section>
      <Header>
        <TitleBlock>
          <Title>{data.title}</Title>
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
    </Section>
  );
};

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
`;
