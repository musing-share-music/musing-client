import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import StarIcon from 'shared/assets/image/icons/icon-star.svg?react';

type StarRatingProps = {
  starColor?: string;
  isToggled?: boolean;
  starCount?: number;
};

export const StarRating = ({ starColor, isToggled = false, starCount = 0 }: StarRatingProps) => {
  const theme = useTheme();
  const defaultColor = theme.colors.primary2;
  const activeColor = starColor || defaultColor;

  const [stars, setStars] = useState<boolean[]>(Array.from({ length: 5 }, (_, index) => index < starCount));

  useEffect(() => {
    setStars(Array.from({ length: 5 }, (_, index) => index < starCount));
  }, [starCount]);

  const toggleStar = (index: number) => {
    if (!isToggled) return;
    const updatedStars = stars.map((isActive, i) => (i === index ? !isActive : isActive));
    setStars(updatedStars);
  };

  return (
    <StarRatingBlock>
      {stars.map((isActive, index) => (
        <div key={index} onClick={() => toggleStar(index)}>
          {isActive ? <StarIcon fill={activeColor} /> : <StarIcon fill={theme.colors[300]} />}
        </div>
      ))}
    </StarRatingBlock>
  );
};

const StarRatingBlock = styled.div`
  width: 108px;
  height: 24px;
  display: flex;
  gap: 2px;
`;
