import styled from '@emotion/styled';

import { RightDownArrowButton } from 'shared/ui/';

import { content, review } from './anchor';

export const AnchorButton = () => {
  return (
    <AnchorButtonBlock>
      <ButtonBox>
        글 내용
        <RightDownArrowButton href={`#${content}`} />
      </ButtonBox>
      <ButtonBox>
        리뷰 및 평점
        <RightDownArrowButton href={`#${review}`} />
      </ButtonBox>
    </AnchorButtonBlock>
  );
};

const AnchorButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[200]};
`;
