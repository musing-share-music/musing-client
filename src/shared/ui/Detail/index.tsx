import styled from '@emotion/styled';

import { commonStyles } from 'shared/styles/common';
import { SelectBox } from 'shared/ui/';

import { review } from './anchor';
import { AnchorButton } from './AnchorButton';
import { Contents } from './Contents';
import imageSrc from './cover.png';
import { MusicInfo } from './MusicInfo';
import { ProfileImage } from './ProfileImage';
import { Section } from './styled';

export const DetailPage = () => {
  return (
    <Layout>
      <LeftContainer>
        <MusicInfo />
        <AnchorButton />
      </LeftContainer>
      <RightContainer>
        <Contents />
        <Section>
          <SectionTitle>리뷰 작성</SectionTitle>
          <CommentForm>
            <ProfileImage width={60} height={60} src={imageSrc} />
            <TextAreaBlock>
              <TextArea placeholder="자유롭게 의견을 남겨 주세요." />
              <SubmitBlock>
                <Rating />
                <Submit>등록</Submit>
              </SubmitBlock>
            </TextAreaBlock>
          </CommentForm>
        </Section>

        <Section>
          <SectionTitle>
            별점 및 리뷰(7)
            <SelectBox
              placeholder="별점순"
              options={[
                {
                  label: '제목',
                  value: 'title',
                },
                {
                  label: '별점순',
                  value: 'star',
                },
                {
                  label: '리뷰만 보기',
                  value: 'review',
                },
              ]}
            />
          </SectionTitle>
          <CommentList id={review}>
            <CommentBox>
              <ProfileImage width={56} height={56} src={imageSrc} />
              <Box>
                <Block>
                  <UserName>음냐나아아앙</UserName>
                  <Rate />
                </Block>
                <Comment>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus nobis omnis quod rerum
                  perspiciatis repudiandae rem fuga autem voluptate quia architecto eos voluptates qui et ipsum, illum,
                  accusamus inventore.
                </Comment>
              </Box>
            </CommentBox>
          </CommentList>
        </Section>
      </RightContainer>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 24px;
`;

const LeftContainer = styled.div`
  width: 336px;
  min-width: 336px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
const CommentForm = styled.form`
  display: flex;
  padding: 32px 48px;
  gap: 20px;
`;
const TextAreaBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  min-height: 116px;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors[100]};
  &::placeholder {
    ${({ theme }) => theme.colors[200]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors[600]};
    color: ${({ theme }) => theme.colors[200]};
  }
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

const CommentList = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 48px;
`;
const Box = styled.div``;
const CommentBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const Block = styled.div`
  display: flex;
  padding: 14px 0 18px;
  gap: 16px;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;
const Rate = styled.div``;
const Comment = styled.div`
  display: flex;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
