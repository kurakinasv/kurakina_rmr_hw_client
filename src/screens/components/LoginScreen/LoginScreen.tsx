import { FC } from 'react';
import LoginForm from '../../../features/auth/components/LoginForm';
import { LoginWrapper, Title } from './LoginScreen.styles';

const LoginPage: FC = () => {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <LoginForm />
    </LoginWrapper>
  );
};

export default LoginPage;
