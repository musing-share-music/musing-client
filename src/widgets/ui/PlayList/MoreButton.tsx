import styled from '@emotion/styled';

import { commonStyles } from 'shared/styles/common';
import { MoreButton as BaseMoreButton, MoreButtonProps } from 'shared/ui/MoreButton';

export const MoreButton = (props: MoreButtonProps) => {
  return (
    <MoreButtonBox>
      <BaseMoreButton {...props} />
    </MoreButtonBox>
  );
};
const MoreButtonBox = styled.div`
  height: fit-content;
  &:hover {
    background: ${({ theme }) => theme.colors[400]};
    border-radius: 4px;
  }
  ${commonStyles.hoverTransition}
`;
