import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { YouVipRoutes } from '../youvip/routes/YouVipRoutes';


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes /> } />

        <Route path="/*" element={ <YouVipRoutes /> } />

    </Routes>
  )
}