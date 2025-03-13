import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export interface UpdateNoticeDto {
  title: string;
  content: string;
  /** 추가할 이미지 파일 */
  files?: File[];
  /** 삭제할 파일 링크 */
  deleteFileLinks?: string[];
}

interface UpdateNoticeResponse {
  data: string;
  message: string;
}

export const fetchUpdateNotice = async (body: UpdateNoticeDto): Promise<UpdateNoticeResponse> => {
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
  body.deleteFileLinks?.forEach((link) => {
    formData.append('deleteFileLinks', link);
  });

  const response = await axiosInstance.post(URL.API.ADMIN.NOTICE, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
