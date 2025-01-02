import { Route, Routes } from 'react-router-dom';

import { AdminCheckPage, AdminDeletedPage, AdminNoticePage, AdminReportPage, AdminUserPage } from 'pages/admin'; // TODO 분리
import Community from 'pages/community';
import Create from 'pages/create/';
import Demo from 'pages/demo';
import MusicDetail from 'pages/detail';
import Home from 'pages/home/Home';
import NotFound from 'pages/notFound/NotFound';
import PlayList from 'pages/playList';

import { ROUTES } from 'shared/config/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path={ROUTES.DEMO} element={<Demo />} />
      <Route path={ROUTES.DETAIL} element={<MusicDetail />} />
      <Route path={ROUTES.CREATE} element={<Create />} />
      <Route path={ROUTES.PLAYLIST} element={<PlayList />} />
      <Route path={ROUTES.ADMIN.NOTICE} element={<AdminNoticePage />} />
      <Route path={ROUTES.ADMIN.USER} element={<AdminUserPage />} />
      <Route path={ROUTES.ADMIN.CHECK} element={<AdminCheckPage />} />
      <Route path={ROUTES.ADMIN.REPORT} element={<AdminReportPage />} />
      <Route path={ROUTES.ADMIN.DELETED} element={<AdminDeletedPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
