import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { commonStyles } from 'shared/styles/common';

type ButtonVariant = 'primary' | 'outlined' | 'primaryOutline';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  width?: number; // 버튼 width
  height?: number; // 버튼 height
  href?: string; // 이동할 href
}

export const Button = ({ children, width, height, disabled, variant = 'primary', href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <StyledLink to={href} width={width} height={height} variant={variant}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton width={width} height={height} variant={variant} disabled={disabled} {...props}>
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
  primaryOutline: (theme: Theme) => css`
    border: 1px solid ${theme.colors.primary2};
    color: ${theme.colors.primary2};
    &:hover {
      background-color: ${theme.colors[400]};
    }
  `,
};

const StyledButton = styled.button<{ width?: number; height?: number; variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: 16px 0px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  ${commonStyles.hoverTransition}
  &:disabled {
    background: ${({ theme }) => theme.colors[400]};
    color: ${({ theme }) => theme.colors[300]};
    &:hover {
      background: ${({ theme }) => theme.colors[400]};
    }
  }

  ${({ theme, variant }) => buttonVariantStyle[variant](theme)}
`;

const StyledLink = styled(Link)<{ width?: number; height?: number; variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: 16px 0px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  ${commonStyles.hoverTransition}

  ${({ theme, variant }) => buttonVariantStyle[variant](theme)}
`;
