import styled from '@emotion/styled';

import { ProfileImage } from 'entities/user/ui/ProfileImage';

import { Button, StarRatingInput, TextArea } from 'shared/ui/';

export const ReviewForm = () => {
  const src = '';
  const handleSubmit = () => {};

  return (
    <Form>
      <ProfileImage width={60} height={60} src={src} />
      <TextAreaBlock>
        <TextArea placeholder="자유롭게 의견을 남겨 주세요." />
        <SubmitBlock>
          <Rating>
            <StarRatingInput
              width={28}
              height={28}
              value={0}
              onChange={(value: number) => {
                console.log(value);
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
