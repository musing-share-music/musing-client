import styled from '@emotion/styled';
import { useState } from 'react';

import { useReplyWriteMutation } from 'entities/reply/api/reply.queries';
import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { Button, StarRatingInput, TextArea } from 'shared/ui/';

export const ReviewForm = ({ boardId }: { boardId: number }) => {
  const src = '';

  const [content, setContent] = useState('');
  const [starScore, setStarScore] = useState(0);

  const mutation = useReplyWriteMutation(boardId);
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!content.trim()) return;

    mutation.mutate({
      boardId,
      replyDto: {
        content,
        starScore,
      },
    });
    setContent('');
    setStarScore(0);
  };

  return (
    <Form>
      <ProfileImage width={60} height={60} src={src} />
      <TextAreaBlock>
        <TextArea
          placeholder="자유롭게 의견을 남겨 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
            />
          </Rating>
          <ButtonBox>
            <Button variant="outlined" type="button" onClick={() => handleSubmit()}>
              등록
            </Button>
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
