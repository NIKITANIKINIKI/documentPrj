import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../../pages/login/LoginPage';
import DataPage from '../../pages/data/DataPage';
import { useSelector } from 'react-redux';
import { RootState } from '../providers/store';

export const AppRoutes = () => {

  const { token} = useSelector((state: RootState) => state.user);
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/data"
          element={token ? <DataPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
};