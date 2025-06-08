import styled from '@emotion/styled';
import moment from 'moment';

import { ANCHOR_CONTENT } from 'pages/detail/config/anchor';

import { getYoutubeVideoId } from 'features/createPost/lib/youtubeId';

import { BoardDetail } from 'entities/community/model/types';
import { ReportButton } from 'entities/community/ui/ReportButton';

import { useUserInfoStore } from 'shared/store/userInfo';
import { RightDownArrowButton, YoutubeIframe } from 'shared/ui/';

import { Section } from './styled';

type ContentsProps = BoardDetail;

export const Contents = ({
  title,
  username,
  musicTitle,
  artist,
  youtubeLink,
  content,
  createdAt,
  updatedAt,
  imageUrl,
  email,
}: ContentsProps) => {
  const { userInfo } = useUserInfoStore();
  const videoId = getYoutubeVideoId(youtubeLink);
  const isAuthor = userInfo.email === email;

  return (
    <Section>
      <Header>
        <TitleBlock>
          <Title>{title}</Title>
          <ButtonBox>
            <ReportButton />
            {isAuthor && <Edit>편집</Edit>}
          </ButtonBox>
        </TitleBlock>
        <InfoBlock>
          <Track>
            {musicTitle} · {artist}
          </Track>
          <Author>작성자 {username}</Author>
        </InfoBlock>
        <InfoBlock>
          <RatingBox />
          <CreatedAt>
            {moment(createdAt).utcOffset(9).format('YYYY년 MM월 DD일')}
            {createdAt === updatedAt ? '(수정됨)' : ''}
          </CreatedAt>
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
        <YoutubePreview id={ANCHOR_CONTENT}>
          <YoutubeIframe videoId={videoId} />
        </YoutubePreview>
        {imageUrl?.map((url, index) => (
          <img key={index} src={url} alt="notice" />
        ))}
        <TextBox>{content}</TextBox>
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
