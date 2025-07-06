import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route to='/auth/*' element={<AuthRoutes />} />
        <Route to='/*' element={<JournalRoutes />} />
    </Routes>
  )
}
