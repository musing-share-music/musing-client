import styled from '@emotion/styled';

import { ReportButton } from 'entities/community/ui/ReportButton';
import { Reply as TReply } from 'entities/reply/model/type';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { StarRatingInput } from 'shared/ui/Input';

interface ReplyProps {
  comments: TReply[];
}

export const Reply = ({ comments }: ReplyProps) => {
  return (
    <>
      {comments.map(({ userId, src, content, rate }) => (
        <ReplyBox key={userId}>
          <ProfileImage width={56} height={56} src={src || ''} />
          <Box>
            <Block>
              <ReplyUserIdBlock>
                <UserName>{userId}</UserName>
                <StarRatingInput value={rate} enabled={false} />
              </ReplyUserIdBlock>
              <ReportButton />
            </Block>
            <Content>{content}</Content>
          </Box>
        </ReplyBox>
      ))}
    </>
  );
};

const Box = styled.div`
  width: 100%;
`;
const ReplyBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;
const ReplyUserIdBlock = styled.div`
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
