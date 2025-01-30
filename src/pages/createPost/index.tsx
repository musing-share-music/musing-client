import { useState } from 'react';

import { MainLayout } from 'widgets/ui/Layout';

import { useCreatePostMutation } from 'features/createPost/lib/useCreatePostMutation';
import { getFromErrorMessage, validateFormSchema, validateYoutubeLink } from 'features/createPost/lib/validate';
import { useFormState } from 'features/createPost/model/useFormState';

import { CreatePostDto } from 'entities/post/api/createPost';
import { CreateForm } from 'entities/post/ui/CreateForm';

import { Container, Layout } from './ui/styled';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState(''); // create mutation시 발생하는 에러 핸들링
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const { formData, updateFormData } = useFormState();

  const createFormMutation = useCreatePostMutation();

  const { youtubeUrl, artist, musicTitle, title, content, mood, genre, image } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createFormMutation.isPending) return;

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
      setErrorMessage(getFromErrorMessage(formValidation.error));
      setErrorModalOpen(true);
      return;
    }

    // youtubelink가 올바른지 검증
    if (!validateYoutubeLink(youtubeUrl)) {
      setErrorMessage('유튜브 링크를 다시 확인해 주세요.');
      setErrorModalOpen(true);
      return;
    }

    createFormMutation.mutate(_formData, {
      onError: (err) => {
        setErrorMessage(err.message || '서버에 문제가 생겼습니다. 다시 시도해 주세요.');
        setErrorModalOpen(true);
      },
    });
  };

  return (
    <MainLayout>
      <Layout>
        <Container>
          <CreateForm
            onSubmit={handleSubmit}
            formData={formData}
            updateFormData={updateFormData}
            errorMessage={errorMessage}
            errorModalOpen={errorModalOpen}
            closeErrorModal={() => {
              setErrorModalOpen(false);
              setErrorMessage('');
            }}
          />
        </Container>
      </Layout>
    </MainLayout>
  );
};

export default Page;
