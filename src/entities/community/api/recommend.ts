import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

interface RecommendResponse {
  data: {
    isRecommended: boolean;  // 좋아요 상태
  };
  message: string;
}

export const fetchPostRecommend = async (boardId: number) => {
  const response = await axiosInstance.post<RecommendResponse>(
    URL.API.BOARD_RECOMMEND,
    null,
    {
      params: { boardId }
    }
  );
  return response.data;
}; 