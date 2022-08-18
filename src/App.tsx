import { observer } from 'mobx-react-lite';
import './ui-library/normalize.scss';
import { useEffect } from 'react';
import { AuthStoreProvider, useAuthStoreContext } from './features/auth/auth.store';
import Layout from './features/layout';
import Router from './screens/Router';

const App = () => {
  const { isAuthenticated, initUser } = useAuthStoreContext();

  useEffect(() => {
    initUser();
  }, []);

  return (
    <AuthStoreProvider>
      <Layout>
        <Router isAuthenticated={isAuthenticated} />
      </Layout>
    </AuthStoreProvider>
  );
};

export default observer(App);
