import styled from '@emotion/styled';
import { useState } from 'react';

import { useCreatePostMutation } from 'features/createNotice/lib/useCreatePostMutation';
import { getFromErrorMessage, validateFormSchema } from 'features/createNotice/lib/validate';

import { CreateNoticeDto } from 'entities/notice/api/createNotice';

import { useFormValue } from 'shared/hooks/useFormValue';
import { Button, TextArea } from 'shared/ui/';
import { ImageInput } from 'shared/ui/Input/ImageInput';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';

import { Section } from './styled';

interface FormData {
  title: string; // 게시글 제목
  content: string; // 게시글 내용
  files?: File[]; // 이미지 파일
}

export const NoticeForm = () => {
  const [errorMessage, setErrorMessage] = useState(''); // 폼과 관련된 에러 핸들링
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const { formData, updateFormData } = useFormValue({
    title: '',
    content: '',
    files: undefined,
  } as FormData);

  const createFormMutation = useCreatePostMutation();

  const { title, content, files: image } = formData;

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

    const _formData: CreateNoticeDto = {
      title,
      files: image,
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
        </TitleField>

        <TrackField>
          <ImageInput onUpload={(file) => updateFormData('files', file)} />
        </TrackField>

        <BodyField>
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

const TrackField = styled.section`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 32px 32px 48px;
  background-color: ${({ theme }) => theme.colors[700]};
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
`;
