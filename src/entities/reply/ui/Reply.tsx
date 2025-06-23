import styled from '@emotion/styled';
import { useState } from 'react';

import { ReportButton } from 'entities/community/ui/ReportButton';
import { Reply as TReply } from 'entities/reply/model/type';
import { DeleteReplyModal } from 'entities/reply/ui/DeleteReplyModal';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { useUserInfoStore } from 'shared/store/userInfo';
import { TextArea } from 'shared/ui';
import { StarRatingInput } from 'shared/ui/Input';

interface ReplyProps {
  comments: TReply[];
  onDeleteReply: (replyId: number) => void;
  onModifyReply: (replyId: number, content: string, starScore: number) => void;
}

export const Reply = ({ comments, onDeleteReply, onModifyReply }: ReplyProps) => {
  const [selectedReplyId, setSelectedReplyId] = useState<string | null>(null);
  const [editingReplyId, setEditingReplyId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const { userInfo } = useUserInfoStore();

  const handleEditStart = (replyId: string, content: string) => {
    setEditingReplyId(replyId);
    setEditContent(content);
  };

  const handleEditCancel = () => {
    setEditingReplyId(null);
    setEditContent('');
  };

  const handleEditSubmit = (replyId: string, starScore: number) => {
    if (editContent.trim()) {
      onModifyReply(Number(replyId), editContent, starScore);
      setEditingReplyId(null);
      setEditContent('');
    }
  };

  return (
    <>
      {comments.map(({ id: replyId, content, starScore, profileInfo }) => {
        const isAuthor = userInfo.email === profileInfo.email;
        const isEditing = editingReplyId === replyId;

        return (
          <>
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
                    {isAuthor && !isEditing && (
                      <>
                        <EditButton onClick={() => handleEditStart(replyId, content)}>수정</EditButton>
                        <DeleteButton onClick={() => setSelectedReplyId(replyId)}>삭제</DeleteButton>
                      </>
                    )}
                    {isEditing && (
                      <>
                        <EditButton onClick={() => handleEditSubmit(replyId, starScore)}>완료</EditButton>
                        <CancelButton onClick={handleEditCancel}>취소</CancelButton>
                      </>
                    )}
                  </ButtonGroup>
                </Block>
                {isEditing ? (
                  <EditContent>
                    <TextArea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      placeholder="수정할 내용을 입력하세요"
                    />
                  </EditContent>
                ) : (
                  <Content>{content}</Content>
                )}
              </Box>
            </ReplyBox>
            <DeleteReplyModal
              open={!!selectedReplyId}
              onClose={() => setSelectedReplyId(null)}
              onConfirm={() => selectedReplyId && onDeleteReply(Number(selectedReplyId))}
              hasReview={isAuthor}
            />
          </>
        );
      })}
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

const EditContent = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const EditButton = styled.button`
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

const CancelButton = styled(EditButton)`
  color: ${({ theme }) => theme.colors[300]};
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[300]};
  }
`;
