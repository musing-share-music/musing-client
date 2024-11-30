import { Route, Routes } from 'react-router-dom';

import Community from 'pages/community';
import Home from 'pages/home';
import NotFoundPage from 'pages/notFoundPage';

import { ROUTES } from 'shared/config/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
