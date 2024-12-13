import styled from '@emotion/styled';

import CloseSVG from 'shared/assets/image/icons/icon-close.svg?react';

interface CloseButtonProps extends Omit<React.ComponentProps<'button'>, 'onClick' | 'type'> {
  onClose: () => void;
}

export const CloseButton = ({ style, onClose, ...props }: CloseButtonProps) => {
  return (
    <StyledButton style={style} onClick={onClose} type="button" {...props}>
      <CloseSVG />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.colors[500]};
`;
