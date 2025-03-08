import styled from '@emotion/styled';
import { useState } from 'react';

import { ImageInput } from 'features/createNotice/ui/CreateForm/ImageInput';
import { useUpdateNoticeMutation } from 'features/updateNotice/lib/useUpdateNoticeMutation';
import { getFromErrorMessage, validateFormSchema } from 'features/updateNotice/lib/validate';

import IconCloseSvg from 'shared/assets/image/icons/icon-close.svg?react';
import { useFormValue } from 'shared/hooks/useFormValue';
import { Button } from 'shared/ui/Button';
import { TextArea } from 'shared/ui/Input';
import { ErrorModal } from 'shared/ui/Modal';

import { Section } from './styled';

interface NoticeFormProps {
  noticeId: number;
  title: string;
  content: string;
  imageUrl?: string[];
}

export interface FormData {
  title: string;
  content: string;
  files: File[];
  deleteFileLinks: string[]; // 삭제할 파일 url
}

export const NoticeForm = ({ noticeId, ...defaultFormValues }: NoticeFormProps) => {
  const [errorMessage, setErrorMessage] = useState(''); // 폼과 관련된 에러 핸들링
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const { formData, updateFormData } = useFormValue({
    title: defaultFormValues.title,
    content: defaultFormValues.content,
    files: [],
    deleteFileLinks: [],
  } as FormData);
  // 기존 이미지 url
  const [imageUrl, setImageUrl] = useState<string[]>(defaultFormValues.imageUrl || []);
  const updateFormMutation = useUpdateNoticeMutation(noticeId);

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
    if (updateFormMutation.isPending) return;

    const _formData = {
      noticeId,
      title,
      files: image?.length ? image : undefined,
      content,
      deleteFileLinks: formData.deleteFileLinks,
    };

    // form schema가 올바른지 검증
    const formValidation = validateFormSchema(_formData);
    if (!formValidation.success) {
      showErrorModal(getFromErrorMessage(formValidation.error));
      return;
    }

    updateFormMutation.mutate(_formData, {
      onError: (err) => {
        showErrorModal(err.message || '서버에 문제가 생겼습니다. 다시 시도해 주세요.');
      },
    });
  };

  const removeImage = (url: string) => {
    setImageUrl((prevUrl) => prevUrl.filter((prev) => prev !== url));
    updateFormData('deleteFileLinks', [...formData.deleteFileLinks, url]);
  };

  const addImage = (file: File) => {
    updateFormData('files', [...formData.files, file]);
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
              name="title"
              onChange={(e) => updateFormData('title', e.target.value)}
            />
          </TitleBlock>
        </TitleField>

        <TrackField>
          <ImageInput onUpload={(file) => addImage(file)} />
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
            name="content"
            onChange={(e) => updateFormData('content', e.target.value)}
          />
          <ImageList>
            {imageUrl?.map((url, index) => (
              <ImageItem key={index}>
                <img src={url} alt={`uploaded-${index}`} />
                <DeleteButton onClick={() => removeImage(url)}>
                  <IconCloseSvg />
                </DeleteButton>
              </ImageItem>
            ))}
          </ImageList>
        </BodyField>
      </Section>

      <Section
        style={{
          marginBottom: '244px',
        }}
      >
        <SubmitBlock>
          <ButtonBox>
            <Button type="submit">등록</Button>
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

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ImageItem = styled.div`
  position: relative;
  img {
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
