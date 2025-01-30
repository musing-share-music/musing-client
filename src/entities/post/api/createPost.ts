import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import URL from 'shared/config/urls';

export interface CreatePostDto {
  userEmail?: string; // 작성자 이메일 // TODO: 로그인 기능 완료 후, 프로퍼티 삭제
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
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchCreatePost = async (body: CreatePostDto): Promise<CreatePostResponse> => {
  const path = '/musing/boards/create';
  const formData = new FormData();

  if (body.userEmail) {
    formData.append('userEmail', body.userEmail);
  }

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

  const response = await instance.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const useCreatePostMutation = () => {
  const createPostMutation = useMutation({
    mutationFn: fetchCreatePost,
  });
  return createPostMutation;
};
