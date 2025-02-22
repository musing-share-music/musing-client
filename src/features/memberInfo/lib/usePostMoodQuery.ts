import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostMood } from 'entities/memberInfo/api/MoodPost';

export const useMoodPostMutation = () => {
  const queryClient = useQueryClient();

  const MoodModifyMutation = useMutation({
    mutationFn: (selectedMoods: number[]) => fetchPostMood(selectedMoods),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return MoodModifyMutation;
};
