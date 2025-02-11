import { useState } from 'react';

import { MainLayout } from 'widgets/ui/Layout';

import { ERROR_MESSAGE } from 'features/community/createPost/lib/errorMessage';
import { useCreatePostMutation } from 'features/community/createPost/lib/useCreatePostMutation';
import { getFromErrorMessage, validateFormSchema } from 'features/community/createPost/lib/validate';
import { useFormState } from 'features/community/createPost/model/useFormState';

import { CreatePostDto } from 'entities/community/api/createPost';
import { CreateForm } from 'entities/community/ui/CreateForm';

import { Container, Layout } from './ui/styled';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState(''); // 폼과 관련된 에러 핸들링
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const { formData, isValidYoutubeUrl } = useFormState();

  const createFormMutation = useCreatePostMutation();

  const { youtubeUrl, artist, musicTitle, title, content, mood, genre, image } = formData;

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
      hashtags: mood,
      genre,
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
    <MainLayout>
      <Layout>
        <Container>
          <CreateForm
            onSubmit={handleSubmit}
            errorMessage={errorMessage}
            errorModalOpen={errorModalOpen}
            closeErrorModal={closeErrorModal}
          />
        </Container>
      </Layout>
    </MainLayout>
  );
};

export default Page;
