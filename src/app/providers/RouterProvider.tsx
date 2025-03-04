import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'shared/config/routes';

const AdminCheckPage = lazy(() => import('../../pages/admin/check'));
const AdminDeletedPage = lazy(() => import('../../pages/admin/delete'));
const AdminNoticePage = lazy(() => import('../../pages/admin/notice'));
const AdminNoticeDetailPage = lazy(() => import('../../pages/admin/noticeDetail'));
const AdminCreateNoticePage = lazy(() => import('../../pages/admin/createNotice'));
const AdminUpdateNoticePage = lazy(() => import('../../pages/admin/updateNotice'));
const AdminPostReportPage = lazy(() => import('../../pages/admin/postReport'));
const AdminReviewReportPage = lazy(() => import('../../pages/admin/reviewReport'));
const AdminUserPage = lazy(() => import('../../pages/admin/user'));
const Community = lazy(() => import('../../pages/community'));
const Create = lazy(() => import('../../pages/createPost'));
const Demo = lazy(() => import('../../pages/demo'));
const MusicDetail = lazy(() => import('../../pages/detail'));
const Home = lazy(() => import('../../pages/home'));
const MemberCommunity = lazy(() => import('../../pages/memberInfo/ui/community'));
const MemberInfo = lazy(() => import('../../pages/memberInfo/ui/member'));
const MemberReview = lazy(() => import('../../pages/memberInfo/ui/review'));
const NotFound = lazy(() => import('../../pages/notFound/NotFound'));
const PlayList = lazy(() => import('../../pages/playList'));
const NoticePage = lazy(() => import('../../pages/notice'));
const NoticeDetailPage = lazy(() => import('../../pages/noticeDetail'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path={ROUTES.DEMO} element={<Demo />} />
      <Route path={ROUTES.DETAIL} element={<MusicDetail />} />
      <Route path={ROUTES.CREATE} element={<Create />} />
      <Route path={ROUTES.PLAYLIST} element={<PlayList />} />

      <Route path={ROUTES.MEMBERINFO.MEMBERINFO} element={<MemberInfo />} />
      <Route path={ROUTES.MEMBERINFO.MEMBERINFOCOMMUNITY} element={<MemberCommunity />} />
      <Route path={ROUTES.MEMBERINFO.MEMBERINFOREVIEW} element={<MemberReview />} />

      <Route path={ROUTES.NOTICE} element={<NoticePage />} />
      <Route path={ROUTES.NOTICE_DETAIL} element={<NoticeDetailPage />} />

      <Route path={ROUTES.ADMIN.NOTICE} element={<AdminNoticePage />} />
      <Route path={ROUTES.ADMIN.NOTICE_DETAIL} element={<AdminNoticeDetailPage />} />
      <Route path={ROUTES.ADMIN.CREATE_NOTICE} element={<AdminCreateNoticePage />} />
      <Route path={ROUTES.ADMIN.UPDATE_NOTICE} element={<AdminUpdateNoticePage />} />
      <Route path={ROUTES.ADMIN.USER} element={<AdminUserPage />} />
      <Route path={ROUTES.ADMIN.CHECK} element={<AdminCheckPage />} />
      <Route path={ROUTES.ADMIN.POST_REPORT} element={<AdminPostReportPage />} />
      <Route path={ROUTES.ADMIN.REVIEW_REPORT} element={<AdminReviewReportPage />} />
      <Route path={ROUTES.ADMIN.DELETED} element={<AdminDeletedPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
