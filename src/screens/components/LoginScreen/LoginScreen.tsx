import { FC } from 'react';
import { LoginForm } from '../../../features/auth';
import Title from '../../../ui-library/components/Title';
import { LoginWrapper } from './LoginScreen.styles';

const LoginScreen: FC = () => {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <LoginForm />
    </LoginWrapper>
  );
};

export default LoginScreen;
