import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchGetNoticeDetail } from 'entities/notice/api';

import { Contents } from './Contents';
import { Layout } from './styled';

export const DetailPage = () => {
  const params = useParams();
  const noticeId = Number(params.id);
  const queryKey = isNaN(noticeId) ? [] : ['noticeDetail', noticeId];

  const { data, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchGetNoticeDetail({ noticeId }),
    enabled: !isNaN(noticeId),
    select: (data) => data.data,
  });

  // TODO data undefined 처리
  return <Layout>{!isLoading && data ? <Contents data={data} /> : null}</Layout>;
};
