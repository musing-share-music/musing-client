import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
export interface ValidateYoutubeUrlRequest {
  url: string;
}

type ValidateYoutubeUrlResponse = string;

export const validateYoutubeUrl = async ({ url }: ValidateYoutubeUrlRequest) => {
  const data = await axiosInstance.get<ValidateYoutubeUrlResponse>(URL.API.VALIDATE_YOUTUBE_URL, {
    params: { url },
  });
  return data;
};
