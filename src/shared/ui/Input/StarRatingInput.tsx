import styled from '@emotion/styled';
import { useState } from 'react';

import IconStar from 'shared/assets/image/icons/icon-star.svg?react';
import { commonStyles } from 'shared/styles/common';

type StarRatingInputProps = {
  value: number;
  onChange?: (value: number) => void; // enabled가 false일 때는 필요없으므로 선택적으로 변경
  width?: number;
  height?: number;
  enabled?: boolean;
  color?: string;
};

export const StarRatingInput = ({
  value,
  width = 20,
  height = 20,
  enabled = true,
  color,
  onChange,
}: StarRatingInputProps) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (!enabled || !onChange) return;
    onChange(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    if (!enabled) return;
    setHoveredValue(index + 1);
  };

  const handleMouseLeave = () => {
    if (!enabled) return;
    setHoveredValue(null);
  };

  const currentValue = hoveredValue ?? value;

  return (
    <StarContainer enabled={enabled}>
      {Array.from({ length: 5 }).map((_, index) => (
        <AnimatedStar
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          filled={index < currentValue}
          width={width}
          height={height}
          enabled={enabled}
          color={color}
        />
      ))}
    </StarContainer>
  );
};

const StarContainer = styled.div<{ enabled: boolean }>`
  display: flex;
  gap: 2px;
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'default')};
`;

const AnimatedStar = styled(IconStar)<{
  filled: boolean;
  enabled: boolean;
  color?: string;
}>`
  fill: ${({ filled, theme, color }) => (filled ? color || theme.colors.primary1 : theme.colors[300])};
  ${({ enabled }) => enabled && commonStyles.hoverTransition};
`;
