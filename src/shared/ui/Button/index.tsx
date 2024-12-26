import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { commonStyles } from 'shared/styles/common';

type ButtonVariant = 'primary' | 'outlined';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

const buttonVariantStyle: Record<ButtonVariant, (theme: Theme) => SerializedStyles> = {
  primary: (theme: Theme) => css`
    border: 1px solid ${theme.colors[400]};
    color: ${theme.colors.white};
    background: ${theme.colors.primary1};
    &:hover {
      background: ${theme.colors.primary1Hover1};
    }
  `,
  outlined: (theme: Theme) => css`
    border: 1px solid ${theme.colors[400]};
    color: ${theme.colors[100]};
    &:hover {
      background: ${theme.colors[400]};
    }
  `,
};

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  ${commonStyles.hoverTransition}

  ${({ theme, variant }) => buttonVariantStyle[variant](theme)}
`;
