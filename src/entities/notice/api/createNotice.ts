import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export interface CreateNoticeDto {
  title: string;
  content: string;
  files?: File[];
}

interface CreatePostResponse {
  data: string;
  message: string;
}

export const fetchCreateNotice = async (body: CreateNoticeDto): Promise<CreatePostResponse> => {
  const formData = new FormData();

  formData.append(
    'requestDto',
    JSON.stringify({
      title: body.title,
      content: body.content,
    }),
  );
  body.files?.forEach((files) => {
    formData.append('files', files);
  });

  const response = await axiosInstance.post(URL.API.ADMIN.NOTICE, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
