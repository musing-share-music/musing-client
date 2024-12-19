import styled from '@emotion/styled';

import IconShowMoreSvg from 'shared/assets/image/icons/icon-show-more.svg?react';

interface MoreButtonProps {
  width?: number;
  height?: number;
}

export const MoreButton = ({ width = 20, height = 20 }: MoreButtonProps) => {
  return (
    <Button>
      <IconShowMoreSvg width={width} height={height} />
    </Button>
  );
};

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 4px;
  border: none;
  cursor: pointer;
`;
