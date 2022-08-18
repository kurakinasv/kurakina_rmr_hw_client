import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import KittyScreen from './components/KittyScreen';
import LoginScreen from './components/LoginScreen';

enum RoutesEnum {
  kitty = '/kitty',
  auth = '/auth',
}

const Router: FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          <Route path={RoutesEnum.kitty} element={<KittyScreen />} />
          <Route path="*" element={<Navigate to={RoutesEnum.kitty} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={RoutesEnum.auth} element={<LoginScreen />} />
          <Route path="*" element={<Navigate to={RoutesEnum.auth} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
