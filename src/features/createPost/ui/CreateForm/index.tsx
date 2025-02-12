import styled from '@emotion/styled';
import { useMemo, useRef, useState } from 'react';

import { ERROR_MESSAGE } from 'features/createPost/lib/errorMessage';
import { useCreatePostMutation } from 'features/createPost/lib/useCreatePostMutation';
import { getFromErrorMessage, validateFormSchema } from 'features/createPost/lib/validate';
import { getYoutubeVideoId } from 'features/createPost/lib/youtubeId';
import { useFormStore } from 'features/createPost/model/useFormStore';

import { CreatePostDto } from 'entities/community/api/createPost';

import { Button, TextArea, YoutubeIframe } from 'shared/ui/';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';

import { EditableElement } from './EditableElement';
import { ImageInput } from './ImageInput';
import { Section } from './styled';
import { TagInput } from './TagInput';
import { YoutubeLinkInput } from './YoutubeLinkInput';

export const CreateForm = () => {
  const [errorMessage, setErrorMessage] = useState(''); // 폼과 관련된 에러 핸들링
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const artistInputRef = useRef<HTMLSpanElement>(null);
  const musicTitleInputRef = useRef<HTMLSpanElement>(null);
  const formData = useFormStore((state) => state.formData);
  const updateFormData = useFormStore((state) => state.updateFormData);
  const isValidYoutubeUrl = useFormStore((state) => state.isValidYoutubeUrl);
  const createFormMutation = useCreatePostMutation();

  const { youtubeUrl, artist, musicTitle, title, content, mood, genre, image } = formData;
  const videoId = useMemo(() => getYoutubeVideoId(youtubeUrl), [youtubeUrl]);

  const showErrorModal = (msg: string) => {
    setErrorMessage(msg);
    setErrorModalOpen(true);
  };
  const closeErrorModal = () => {
    setErrorModalOpen(false);
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createFormMutation.isPending) return;

    if (!isValidYoutubeUrl) {
      showErrorModal(ERROR_MESSAGE.youtubeLink.invalid);
      return;
    }

    const _formData: CreatePostDto = {
      title,
      musicTitle,
      artist,
      youtubeLink: youtubeUrl,
      hashtags: mood.map((m) => m.toString()),
      genre: genre.toString(),
      image,
      content,
    };

    // form schema가 올바른지 검증
    const formValidation = validateFormSchema(_formData);
    if (!formValidation.success) {
      showErrorModal(getFromErrorMessage(formValidation.error));
      return;
    }

    createFormMutation.mutate(_formData, {
      onError: (err) => {
        showErrorModal(err.message || '서버에 문제가 생겼습니다. 다시 시도해 주세요.');
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorModal
        open={errorModalOpen}
        onClose={() => {
          closeErrorModal();
        }}
      >
        {errorMessage}
      </ErrorModal>

      <Section>
        <TitleField>
          <TitleBlock>
            <TextField
              type="text"
              placeholder="제목을 입력해 주세요."
              value={title}
              onChange={(e) => updateFormData('title', e.target.value)}
            />
          </TitleBlock>
          <InfoBlock>
            <Track>
              <EditableElement
                ref={artistInputRef}
                placeholder={artist || '아티스트 명'}
                onChange={(value) => updateFormData('artist', value)}
              />
              &nbsp;·&nbsp;
              <EditableElement
                ref={musicTitleInputRef}
                placeholder={musicTitle || '곡 제목'}
                onChange={(value) => updateFormData('musicTitle', value)}
              />
            </Track>
          </InfoBlock>
        </TitleField>

        <TrackField>
          <YoutubeLinkInput youtubeUrl={youtubeUrl} onChange={(e) => updateFormData('youtubeUrl', e.target.value)} />
          <TagInput
            onConfirm={(tags) => {
              const { genre, mood } = tags;
              updateFormData('genre', genre);
              updateFormData('mood', mood);
            }}
          />
          <ImageInput onUpload={(file) => updateFormData('image', file)} />
        </TrackField>

        <BodyField>
          <YoutubeIframe videoId={videoId} />
          <TextArea
            placeholder="내용을 입력해 주세요."
            style={{
              border: 'none',
              height: '100%',
              minHeight: '760px',
            }}
            value={content}
            onChange={(e) => updateFormData('content', e.target.value)}
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

const Form = styled.form`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

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

const TrackField = styled.section`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 32px 32px 48px;
  background-color: ${({ theme }) => theme.colors[700]};
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;
