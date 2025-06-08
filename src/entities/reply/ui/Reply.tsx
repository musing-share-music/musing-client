import styled from '@emotion/styled';
import { useState } from 'react';

import { ReportButton } from 'entities/community/ui/ReportButton';
import { Reply as TReply } from 'entities/reply/model/type';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { useUserInfoStore } from 'shared/store/userInfo';
import { StarRatingInput } from 'shared/ui/Input';
import { ConfirmModal } from 'shared/ui/Modal';
interface ReplyProps {
  comments: TReply[];
  onDeleteReply: (replyId: number) => void;
}

export const Reply = ({ comments, onDeleteReply }: ReplyProps) => {
  const [selectedReplyId, setSelectedReplyId] = useState<string | null>(null);
  const { userInfo } = useUserInfoStore();

  return (
    <>
      {comments.map(({ id: replyId, content, starScore, profileInfo }) => {
        const isAuthor = userInfo.email === profileInfo.email;

        return (
          <ReplyBox key={replyId}>
            <ProfileImage width={56} height={56} src={profileInfo.profileUrl || ''} />
            <Box>
              <Block>
                <ReplyUserIdBlock>
                  <UserName>{profileInfo.name}</UserName>
                  <ScoreBox>
                    <StarRatingInput value={starScore} enabled={false} />
                    {starScore}
                  </ScoreBox>
                </ReplyUserIdBlock>
                <ButtonGroup>
                  {!isAuthor && <ReportButton />}
                  {isAuthor && <DeleteButton onClick={() => setSelectedReplyId(replyId)}>삭제</DeleteButton>}
                </ButtonGroup>
              </Block>
              <Content>{content}</Content>
            </Box>
          </ReplyBox>
        );
      })}
      <DeleteModal
        open={!!selectedReplyId}
        onClose={() => setSelectedReplyId(null)}
        onConfirm={() => selectedReplyId && onDeleteReply(Number(selectedReplyId))}
      />
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DeleteButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
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

const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;

const DeleteModal = ({ open, onClose, onConfirm }: { open: boolean; onClose: () => void; onConfirm: () => void }) => {
  return (
    <ConfirmModal
      text="정말 댓글을 삭제 하시겠어요?"
      confirmText="삭제하기"
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};
