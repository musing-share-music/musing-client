import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { TransitionStatus } from 'react-transition-state';

import { commonStyles } from 'shared/styles/common';

import { Step } from './type';

const contentsPadding = css`
  padding: 0 56px;
`;

type StyledModal = { [key in Step]: SerializedStyles };

export const durationMs = 600;

const bodyCss: StyledModal = {
  genre: css`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
  `,
  mood: css`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
  `,
  artist: css``,
};

const footerCss: StyledModal = {
  genre: css`
    margin-top: 60px;
  `,
  mood: css`
    margin-top: 100px;
  `,
  artist: css`
    margin-top: 156px;
  `,
};

export const Container = styled.div`
  padding: 56px 0;
  width: 880px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${contentsPadding}
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

export const Body = styled.div<{ step: Step; status: TransitionStatus }>`
  margin-top: 40px;
  ${contentsPadding}
  ${({ step }) => bodyCss[step]};

  ${({ status }) =>
    status === 'entering' &&
    css`
      animation: ${commonStyles.slideFromRightToLeft} ${durationMs}ms ease forwards;
    `};
`;

export const ModalCaption = styled.p`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors.primary2};
`;

export const Footer = styled.div<{ step: Step }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${contentsPadding}
  ${({ step }) => footerCss[step]};
`;
