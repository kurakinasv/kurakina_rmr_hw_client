import { FC, PropsWithChildren } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Container, Content } from './Layout.styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
