import axios from 'axios';

import URL from 'shared/config/urls';

export interface CreatePostDto {
  title: string; // 글 제목
  musicTitle: string; // 곡명
  artist: string; // 아티스트명
  youtubeLink: string;
  hashtags: string[]; // 분위기
  genre: string; // 장르
  image?: File; // TODO 이미지 여러장
  content: string; // 글 내용
}

interface CreatePostResponse {
  data: '';
}

// TODO 공통 instance로 개선
const instance = axios.create({
  baseURL: URL.SERVERURL,
  timeout: 5000, // 임의로 지정
});

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
    formData.append('image', body.image);
  }

  const response = await instance.post('/musing/boards/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });

  return response.data;
};
