import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
export interface CreatePostDto {
  title: string; // 글 제목
  musicTitle: string; // 곡명
  artist: string; // 아티스트명
  youtubeLink: string;
  hashtags: string[]; // 분위기
  genre: string; // 장르
  image?: File[]; // 이미지 파일
  content: string; // 글 내용
}

interface CreatePostResponse {
  data: '';
}

export const fetchCreatePost = async (body: CreatePostDto): Promise<CreatePostResponse> => {
  const formData = new FormData();

  formData.append('title', body.title);
  formData.append('musicTitle', body.musicTitle);
  formData.append('artist', body.artist);
  formData.append('youtubeLink', body.youtubeLink);
  formData.append('genre', body.genre);
  formData.append('content', body.content);
  body.hashtags.forEach((hashtag) => {
    formData.append('hashtags', hashtag);
  });

  if (body.image) {
    body.image.forEach((image) => {
      formData.append('image', image);
    });
  }

  const response = await axiosInstance.post(URL.API.BOARD_CREATE, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });

  return response.data;
};
