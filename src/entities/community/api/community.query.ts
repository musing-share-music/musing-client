import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchGetBoardDetail } from './boardDetail';
import { fetchGetList } from './ListGet';
import { fetchGetPageList } from './PageListGet';
import { fetchPostRecommend } from './recommend';
import { fetchGetSearchList, FetchGetSearchListRequestDto } from './SearchListGet';

type CommunityFilters = FetchGetSearchListRequestDto;

export const community = createQueryKeys('community', {
  list: () => ({
    queryKey: ['list'],
    queryFn: () => fetchGetList(),
  }),
  pagelist: (page: number) => ({
    queryKey: [{ page }],
    queryFn: () => fetchGetPageList(page),
  }),
  filter: (filters: CommunityFilters) => ({
    queryKey: [{ ...filters }],
    queryFn: () => fetchGetSearchList(filters),
  }),
  detail: (boardId: number) => ({
    queryKey: [{ boardId }],
    queryFn: () => fetchGetBoardDetail(boardId),
  }),
});

/**
 * 좋아요 버튼 클릭 시 좋아요 수 증가
 * @param boardId 게시글 ID
 */
export const useRecommendMutation = (boardId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => fetchPostRecommend(boardId),
    onSuccess: async () => {
      // 게시글 상세 정보 갱신
      await queryClient.invalidateQueries({
        queryKey: community.detail(boardId).queryKey,
      });
      // 게시글 목록도 갱신 (좋아요 수가 목록에도 표시된다면)
      await queryClient.invalidateQueries({
        queryKey: community.list().queryKey,
      });
    },
  });
};
