import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';

import { useSelectMood } from 'features/mood/selectMood/lib/useSelectMood';

import { useGetMood } from 'entities/mood/api/useGetMood';
import { Mood } from 'entities/mood/model/mood';
import { MoodChip } from 'entities/mood/ui';

import { SkeletonBox } from 'shared/ui';

interface MoodChipCheckboxProps {
  onSelectChip: (selectedMood: Mood[]) => void;
  initialChecked?: Mood[];
}

/**
 * 분위기 칩을 선택할 수 있는 체크박스
 */
export const MoodChipCheckbox = ({ initialChecked, onSelectChip }: MoodChipCheckboxProps) => {
  const { data: mood, isLoading, error } = useGetMood();
  const { selectedMoodId, handleMoodCheck } = useSelectMood(initialChecked);

  const selectedMood = useMemo(
    () => mood?.filter((data) => selectedMoodId.includes(data.id)) || [],
    [mood, selectedMoodId],
  );

  useEffect(() => {
    onSelectChip(selectedMood);
  }, [onSelectChip, selectedMood]);

  return (
    <ChipContainer>
      {(isLoading || error) &&
        Array(2)
          .fill(0)
          .map((_, idx) => <SkeletonBox key={idx} height={50} />)}

      {mood &&
        mood.length > 0 &&
        mood.map(({ id, moodName: text }) => (
          <MoodChip
            key={id}
            id={`mood-${id.toString()}`}
            text={text}
            name="mood"
            checked={!!selectedMoodId.find((val) => val === id)}
            onChange={(e) => {
              const { checked } = e.target;
              handleMoodCheck({ id, checked });
            }}
          />
        ))}
    </ChipContainer>
  );
};

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 20px;
`;
