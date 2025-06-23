import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { useModifyReplyMutation, useMyRepliesQuery, useReplyWriteMutation } from 'entities/reply/api/reply.queries';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { Button, StarRatingInput, TextArea } from 'shared/ui/';

export const ReviewForm = ({ boardId }: { boardId: number }) => {
  const src = '';
  const [content, setContent] = useState('');
  const [starScore, setStarScore] = useState<number>(0);
  const [isEditing, setIsEditing] = useState(false);

  const { data: existingReply } = useMyRepliesQuery(boardId);
  const writeMutation = useReplyWriteMutation(boardId);
  const editMutation = useModifyReplyMutation(boardId);

  useEffect(() => {
    if (existingReply?.data) {
      setContent(existingReply.data.content);
      setStarScore(existingReply.data.starScore);
      setIsEditing(false);
    }
  }, [existingReply]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!content.trim()) return;

    if (existingReply?.data) {
      editMutation.mutate({
        replyId: parseInt(existingReply.data.id, 10),
        starScore,
        content,
      });
      setIsEditing(false);
    } else {
      writeMutation.mutate({
        boardId,
        replyDto: {
          content,
          starScore,
        },
      });
      setContent('');
      setStarScore(0);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const isFormDisabled = existingReply?.data && !isEditing;

  return (
    <Form>
      <ProfileImage width={60} height={60} src={src} />
      <TextAreaBlock>
        <TextArea
          placeholder="자유롭게 의견을 남겨 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isFormDisabled}
        />
        <SubmitBlock>
          <Rating>
            <StarRatingInput
              width={28}
              height={28}
              value={starScore}
              onChange={(value: number) => {
                setStarScore(value);
              }}
              enabled={!isFormDisabled}
            />
          </Rating>
          <ButtonBox>
            {existingReply?.data ? (
              isEditing ? (
                <Button variant="outlined" type="button" onClick={() => handleSubmit()}>
                  수정완료
                </Button>
              ) : (
                <Button variant="outlined" type="button" onClick={handleEditClick}>
                  수정
                </Button>
              )
            ) : (
              <Button variant="outlined" type="button" onClick={() => handleSubmit()}>
                등록
              </Button>
            )}
          </ButtonBox>
        </SubmitBlock>
      </TextAreaBlock>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 32px 48px;
  gap: 20px;
`;

const TextAreaBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubmitBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const ButtonBox = styled.div`
  width: 132px;
`;
const Rating = styled.div``;
