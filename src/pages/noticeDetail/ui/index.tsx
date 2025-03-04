import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { notice } from 'entities/notice/api/notice.query';

import { Contents } from './Contents';
import { Layout } from './styled';

export const DetailPage = () => {
  const params = useParams();
  const noticeId = Number(params.id);

  const { data, isLoading } = useQuery({
    ...notice.detail(noticeId),
    enabled: !isNaN(noticeId),
    select: (data) => data.data,
  });

  // TODO data undefined 처리
  return <Layout>{!isLoading && data ? <Contents data={data} /> : null}</Layout>;
};
