import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';
import { Pagination } from 'shared/types/pagination';

interface FetchGetDeletedBoardListResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: {
      id: number;
      title: string;
      username: string;
      createdAt: string;
    }[];
    number: number;
    sort: {
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    }[];
    pageable: Pagination<{
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    }>;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
}

interface FetchGetDeletedBoardDetailResponse {
  data: {
    title: string;
    musicTitle: string;
    artist: string[];
    youtubeLink: string;
    hashtags: string[];
    genre: string[];
    content: string;
    playtime: string;
    songLink: string;
    thumbNailLink: string;
    AlbumName: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    permitRegister: 'NON_CHECK' | string;
  };
  message: string;
}

export const fetchGetDeletedBoardList = async (page: number = 1) => {
  const response = await axiosInstance<FetchGetDeletedBoardListResponse>({
    method: 'GET',
    url: URL.SERVERURL + URL.API.ADMIN.REMOVED_BOARD_LIST,
    params: { page },
  });
  return response.data;
};

export const fetchGetDeletedBoardDetail = async (id: number) => {
  const response = await axiosInstance<FetchGetDeletedBoardDetailResponse>({
    method: 'GET',
    url: URL.SERVERURL + URL.API.ADMIN.REMOVED_BOARD_DETAIL,
    params: { id },
  });
  return response.data;
};
