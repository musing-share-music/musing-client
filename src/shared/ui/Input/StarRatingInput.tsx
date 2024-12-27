import styled from '@emotion/styled';
import { useState } from 'react';

import IconStar from 'shared/assets/image/icons/icon-star.svg?react';
import { commonStyles } from 'shared/styles/common';

type StarRatingInputProps = {
  value: number;
  onChange: (value: number) => void;
  width?: number; // 별 아이콘 width
  height?: number; // 별 아이콘 height
};

export const StarRatingInput = ({ value, width = 20, height = 20, onChange }: StarRatingInputProps) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredValue(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredValue(null);
  };

  const currentValue = hoveredValue ?? value;

  return (
    <StarContainer>
      {Array.from({ length: 5 }).map((_, index) => (
        <AnimatedStar
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          filled={index < currentValue}
          width={width}
          height={height}
        />
      ))}
    </StarContainer>
  );
};

const StarContainer = styled.div`
  display: flex;
  gap: 2px;
  cursor: pointer;
`;

const AnimatedStar = styled(IconStar)<{ filled: boolean }>`
  fill: ${({ filled, theme }) => (filled ? theme.colors.primary1 : theme.colors[300])};
  ${commonStyles.hoverTransition}
`;
