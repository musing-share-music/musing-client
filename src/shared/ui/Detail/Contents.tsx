import styled from '@emotion/styled';

import { RightDownArrowButton, YoutubeIframe } from 'shared/ui/';

import { content } from './anchor';
import { ReportButton } from './ReportButton';
import { Section } from './styled';

export const Contents = () => {
  const videoId = 'videoId';
  return (
    <Section>
      <Header>
        <TitleBlock>
          <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
          <ButtonBox>
            <ReportButton />
            <Edit>편집</Edit>
          </ButtonBox>
        </TitleBlock>
        <InfoBlock>
          <Track>Pink! · 권진아</Track>
          <Author>작성자 taeri kim</Author>
        </InfoBlock>
        <InfoBlock>
          <RatingBox />
          <CreatedAt>작성일 2024-12-05 11:05(수정됨)</CreatedAt>
        </InfoBlock>
      </Header>

      <Body>
        <LinkBlock>
          <YoutubeLinkBox>
            유튜브 바로가기
            <RightDownArrowButton
              backgroundColor="primary1"
              hoverBackgroundColor="primary1Hover2"
              iconColor="primary1Hover1"
            />
          </YoutubeLinkBox>
        </LinkBlock>
        <YoutubePreview id={content}>
          <YoutubeIframe videoId={videoId} />
        </YoutubePreview>
        <TextBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae recusandae tempora fugiat, officiis
          assumenda dolor quia eaque consequuntur amet odio corrupti aspernatur corporis nisi vero ullam hic? Eveniet,
          similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae recusandae tempora fugiat,
          officiis assumenda dolor quia eaque consequuntur amet odio corrupti aspernatur corporis nisi vero ullam hic?
          Eveniet, similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae recusandae tempora
          fugiat, officiis assumenda dolor quia eaque consequuntur amet odio corrupti aspernatur corporis nisi vero
          ullam hic? Eveniet, similique?
        </TextBox>
      </Body>
    </Section>
  );
};

const Header = styled.section`
  display: flex;
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
const ButtonBox = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;
`;
const Edit = styled.button`
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
`;

const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Track = styled.p`
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors[100]};
`;
const RatingBox = styled.div``;
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
const LinkBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const YoutubeLinkBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;
const YoutubePreview = styled.div`
  overflow: hidden;
`;
const TextBox = styled.div`
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B7};
`;
