import styled from '@emotion/styled';

import { ReportButton } from 'features/musicRecommendationBoard/ui/ReportButton';

import { Comment as TComment } from 'entities/comment/model/type';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { StarRatingInput } from 'shared/ui/Input';

interface CommentProps {
  comments: TComment[];
}

export const Comment = ({ comments }: CommentProps) => {
  return (
    <>
      {comments.map(({ userId, src, content, rate }) => (
        <CommentBox key={userId}>
          <ProfileImage width={56} height={56} src={src || ''} />
          <Box>
            <Block>
              <CommentUserIdBlock>
                <UserName>{userId}</UserName>
                <StarRatingInput value={rate} enabled={false} />
              </CommentUserIdBlock>
              <ReportButton />
            </Block>
            <Content>{content}</Content>
          </Box>
        </CommentBox>
      ))}
    </>
  );
};

const Box = styled.div`
  width: 100%;
`;
const CommentBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;
const CommentUserIdBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Block = styled.div`
  display: flex;
  padding: 14px 0 18px;
  gap: 16px;
  justify-content: space-between;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;
const Content = styled.div`
  display: flex;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
