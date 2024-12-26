import styled from '@emotion/styled';

import { commonStyles } from 'shared/styles/common';
import { TextArea } from 'shared/ui/Input';

import imageSrc from './cover.png';
import { ProfileImage } from './ProfileImage';
import { Section, SectionTitle } from './styled';

export const ReviewForm = () => {
  return (
    <Section>
      <SectionTitle>리뷰 작성</SectionTitle>
      <Form>
        <ProfileImage width={60} height={60} src={imageSrc} />
        <TextAreaBlock>
          <TextArea placeholder="자유롭게 의견을 남겨 주세요." />
          <SubmitBlock>
            <Rating />
            <Submit>등록</Submit>
          </SubmitBlock>
        </TextAreaBlock>
      </Form>
    </Section>
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
const Rating = styled.div`
  width: 148px;
  height: 28px;
  background-color: pink;
`;
const Submit = styled.button`
  justify-content: center;
  align-items: center;
  width: 132px;
  padding: 16px 0px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  overflow: hidden;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors[400]};
  }
  ${commonStyles.hoverTransition}
`;
