import { css, keyframes } from '@emotion/react';

export const commonStyles = {
  limitText: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  // hover시 애니메이션을 줍니다.
  hoverTransition: css`
    transition: 0.3s ease;
  `,
  // 화면이 오른쪽에서 왼쪽으로 슬라이드되는 애니메이션
  slideFromRightToLeft: keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,
};
