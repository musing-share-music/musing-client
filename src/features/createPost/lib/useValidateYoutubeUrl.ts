import { useMutation } from '@tanstack/react-query';

import { validateYoutubeUrl, ValidateYoutubeUrlRequest } from 'entities/community/api/validateYoutubeUrl';

export const useValidateYoutubeUrl = () => {
  return useMutation({
    mutationFn: (param: ValidateYoutubeUrlRequest) => validateYoutubeUrl(param),
  });
};
