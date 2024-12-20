import styled from '@emotion/styled';

import { Filter } from 'shared/ui/';

import { review } from './anchor';
import imageSrc from './cover.png';
import { ProfileImage } from './ProfileImage';
import { ReportButton } from './ReportButton';

export const ReviewList = () => {
  return (
    <Section>
      <SectionTitle>
        별점 및 리뷰(7)
        <Filter
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
              <Box>
                <UserName>음냐나아아앙</UserName>
                <Rate />
              </Box>
              <ReportButton />
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
  );
};

const Section = styled.section`
  background: ${({ theme }) => theme.colors[700]};
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
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
  justify-content: space-between;
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
