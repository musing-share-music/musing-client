import { AdminLayout } from 'widgets/ui/Layout';

import { NoticeForm } from 'features/createNotice/ui/CreateForm';

export const AdminCreateNoticePage = () => {
  return (
    <AdminLayout>
      <NoticeForm />
    </AdminLayout>
  );
};
