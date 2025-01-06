import styled from '@emotion/styled';

import { ANCHOR_REVIEW } from 'pages/detail/config/anchor';
import { REVIEW_FILTER_OPTIONS } from 'pages/detail/config/filterOption';

import { Filter } from 'shared/ui/';

import { Comment } from './Comment';

export const ReviewList = () => {
  return (
    <Section>
      <SectionTitle>
        별점 및 리뷰(7)
        <Filter placeholder="별점순" options={REVIEW_FILTER_OPTIONS} />
      </SectionTitle>
      <CommentList id={ANCHOR_REVIEW}>
        <Comment
          comments={[
            {
              userId: '이재훈',
              src: 'https://avatars.githubusercontent.com/u/39360633?v=4',
              content: '좋아요',
              rate: 3,
            },
          ]}
        />
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
  width: 100%;
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 48px;
`;
