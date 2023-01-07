import { FC, useEffect } from 'react';
import { LoginForm } from '../../../features/auth';
import Popup, { usePopup } from '../../../ui-library/components/Popup';
import Title from '../../../ui-library/components/Title';
import { LoginWrapper } from './LoginScreen.styles';

const LoginScreen: FC = () => {
  const { handlePopup, isOpen, popupMessage } = usePopup();

  useEffect(() => {
    handlePopup('Чтобы войти, впиши дефолтные значения (больше в README.md)');
  }, []);

  return (
    <LoginWrapper>
      <Popup isOpen={isOpen}>{popupMessage}</Popup>

      <Title>Login</Title>
      <LoginForm />
    </LoginWrapper>
  );
};

export default LoginScreen;
