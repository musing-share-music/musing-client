import axiosInstance from 'shared/lib/axiosInstance';

export interface ValidateYoutubeUrlRequest {
  url: string;
}

interface ValidateYoutubeUrlResponse {
  message: string;
  valid: boolean;
}

export const validateYoutubeUrl = async ({ url }: ValidateYoutubeUrlRequest) => {
  const data = await axiosInstance.get<ValidateYoutubeUrlResponse>('/validate-key', {
    params: { url },
  });
  return data;
};
