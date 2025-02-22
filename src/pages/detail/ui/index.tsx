import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { community } from 'entities/community/api/community.query';
import { ReviewForm } from 'entities/reply/ui/ReplyForm';

import { Contents } from './Contents';
import { MusicInfo } from './MusicInfo';
import { ReviewList } from './ReviewList';
import { Layout, LeftContainer, RightContainer, Section, SectionTitle } from './styled';

export const DetailPage = () => {
  const params = useParams();

  const boardId = Number(params.id);

  /** TODO: 에러 바운더리 추가 
  if (isNaN(boardId)) {
    return <> 잘못된 접근입니다. </>;
  }
     */

  // TODO: skeleton ui 추가
  const { data } = useSuspenseQuery({
    ...community.detail(boardId),
    select(data) {
      return data.data;
    },
  });

  return (
    <Layout>
      <LeftContainer>
        <MusicInfo boardId={boardId} {...data} />
      </LeftContainer>
      <RightContainer>
        <Contents {...data} />
        <Section>
          <SectionTitle>리뷰 작성</SectionTitle>
          <ReviewForm />
        </Section>
        <ReviewList />
      </RightContainer>
    </Layout>
  );
};
