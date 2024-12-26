import { Route, Routes } from 'react-router-dom';

import Community from 'pages/community';
import Create from 'pages/create/';
import Demo from 'pages/demo';
import MusicDetail from 'pages/detail';
import Home from 'pages/home/Home';
import NotFound from 'pages/notFound/NotFound';

import { ROUTES } from 'shared/config/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path={ROUTES.DEMO} element={<Demo />} />
      <Route path={ROUTES.DETAIL} element={<MusicDetail />} />
      <Route path={ROUTES.CREATE} element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
