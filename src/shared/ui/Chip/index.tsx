import styled from '@emotion/styled';

import IconCloseSvg from 'shared/assets/image/icons/icon-close.svg?react';
import { commonStyles } from 'shared/styles/common';

export const Chip = ({ text, onDelete }: { text: string; onDelete: () => void }) => {
  return (
    <>
      <ChipWrapper>
        <CloseButton onClick={() => onDelete()}>
          <IconCloseSvg width={16} />
        </CloseButton>
        {text}
      </ChipWrapper>
    </>
  );
};

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[500]};
  ${commonStyles.hoverTransition}

  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
`;
