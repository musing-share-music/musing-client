import styled from '@emotion/styled';

import { useFormState } from 'features/musicRecommendationBoard/model/useFormState';

import { Button, StarRatingInput, TextArea, TextInput, YoutubeIframe } from 'shared/ui/';

import { ImageInput } from './ImageInput';
import { Section } from './styled';
import { TagInput } from './TagInput';

export const MusicRecommendationForm = () => {
  const { rating, setRating, youtubeUrl, setYoutubeUrl, youtubeVideoId } = useFormState();

  return (
    <Form onSubmit={(e) => e.preventDefault}>
      <Section>
        <TitleField>
          <TitleBlock>
            <TextField type="text" placeholder="제목을 입력해 주세요." />
          </TitleBlock>
          <InfoBlock>
            <Track>곡 제목 · 아티스트 명</Track>
            <RatingBox>
              <StarRatingInput value={rating} onChange={(val) => setRating(val)} />
              <RateText>{rating}.0</RateText>
            </RatingBox>
          </InfoBlock>
        </TitleField>

        <TrackField>
          <TextInput
            placeholder="유튜브 링크를 기입해 주세요."
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
          <TagInput
            onConfirm={(tags) => {
              console.log(tags);
            }}
          />
          <ImageInput onUpload={(file) => console.log(file)} />
        </TrackField>

        <BodyField>
          <YoutubeIframe videoId={youtubeVideoId} />
          <TextArea
            placeholder="내용을 입력해 주세요."
            style={{
              border: 'none',
              height: '100%',
              minHeight: '760px',
            }}
          />
        </BodyField>
      </Section>

      <Section
        style={{
          marginBottom: '244px',
        }}
      >
        <SubmitBlock>
          <SubmitCaption>
            등록한 게시물은 관리자 확인 이후 랭킹과 알고리즘에 반영돼요.
            <br />
            계속해서 등록하시겠어요?
          </SubmitCaption>
          <ButtonBox>
            <Button>등록</Button>
          </ButtonBox>
        </SubmitBlock>
      </Section>
    </Form>
  );
};

const Form = styled.form``;

const TextField = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors[200]};
  &::placeholder {
    color: ${({ theme }) => theme.colors[200]};
  }
`;

const ButtonBox = styled.div`
  width: 163px;
`;

const SubmitCaption = styled.p`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

const SubmitBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 36px 32px;
  align-items: flex-start;
  gap: 28px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

const TitleField = styled.section`
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
const BodyField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  min-height: 760px;
  padding: 32px 32px 48px 32px;
`;
const InfoBlock = styled.div``;
const Track = styled.p`
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors[200]};
`;
const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
`;

const RateText = styled.p`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
`;

const TrackField = styled.section`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 32px 32px 48px;
  background-color: ${({ theme }) => theme.colors[700]};
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;
