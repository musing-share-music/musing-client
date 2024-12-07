import { Route, Routes } from 'react-router-dom';

import Community from 'pages/community/Community';
import Demo from 'pages/demo';
import Home from 'pages/home/Home';
import NotFound from 'pages/notFound/NotFound';

import JSNAM from 'pages/home/Jsnam';

import { ROUTES } from 'shared/config/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path={ROUTES.DEMO} element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
