import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../shared/config/routes';
import Home from '../../pages/Home/index';
import Community from '../../pages/community/index'
import NotFound from '../../pages/NotFoundPage/index';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>} /> 
      <Route path={ROUTES.COMMUNITY.COMMUNITY} element={<Community/>} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};