// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';

// import { AdminLayout } from 'widgets/ui';

// import { NoticeForm } from 'features/updateNotice/ui/UpdateForm';

// import { notice } from 'entities/notice/api/notice.query';

// export const AdminUpdateNoticePage = () => {
//   const params = useParams();
//   const noticeId = Number(params.id);

//   const { data, isLoading, isError } = useQuery({
//     ...notice.detail(noticeId),
//     enabled: !isNaN(noticeId),
//     select: (data) => data.data,
//   });

//   return (
//     <AdminLayout>
//       <NoticeForm
//         noticeId={noticeId}
//         title={data?.title || ''}
//         content={data?.content || ''}
//         imageUrl={data?.imageUrl || []}
//       />
//     </AdminLayout>
//   );
// };
