import { useState } from 'react';

import { ERROR_MESSAGE } from 'features/createPost/lib/errorMessage';
import { useValidateYoutubeUrl } from 'features/createPost/lib/useValidateYoutubeUrl';
import { validateYoutubeLink } from 'features/createPost/lib/validate';
import { useFormStore } from 'features/createPost/model/useFormStore';

import { TextInput } from 'shared/ui';

interface YoutubeLinkInputProps {
  youtubeUrl: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const YoutubeLinkInput = ({ youtubeUrl, onChange }: YoutubeLinkInputProps) => {
  const setIsValidYoutubeUrl = useFormStore((state) => state.setIsValidYoutubeUrl);
  const validateYoutubeUrlMutation = useValidateYoutubeUrl();
  const [errorMessage, setErrorMessage] = useState('');

  const initValidation = () => {
    setErrorMessage('');
    setIsValidYoutubeUrl(false);
  };

  const validateYoutubeUrl = () => {
    // 공백, 중복 실행 방지
    if (!youtubeUrl.trim() || validateYoutubeUrlMutation.isPending) return;
    // 유튜브 링크 검사
    if (!validateYoutubeLink(youtubeUrl)) {
      setErrorMessage(ERROR_MESSAGE.youtubeLink.invalid);
      return;
    }

    validateYoutubeUrlMutation.mutate(
      { url: youtubeUrl },
      {
        onSuccess: ({ data }) => {
          // 유효하지 않은 url response: ❌ 유효한 YouTube 영상 URL이 아닙니다!
          if (data.includes('❌')) {
            setIsValidYoutubeUrl(false);
            setErrorMessage(ERROR_MESSAGE.youtubeLink.invalid);
          } else {
            setIsValidYoutubeUrl(true);
          }
        },
      },
    );
  };

  return (
    <TextInput
      placeholder="유튜브 링크를 기입해 주세요."
      value={youtubeUrl}
      onChange={(e) => {
        onChange(e);
      }}
      onFocus={initValidation}
      onBlur={validateYoutubeUrl}
      errorMessage={errorMessage}
    />
  );
};
