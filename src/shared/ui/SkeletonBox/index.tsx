import styled from '@emotion/styled';

export const SkeletonBox = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => height || 100}px;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  border-radius: 8px;

  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
