import { Route, Routes } from 'react-router-dom';

import Community from '#/pages/community/index';
import Home from '#/pages/Home/index';
import NotFound from '#/pages/NotFoundPage/index';
import { ROUTES } from '#/shared/config/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
