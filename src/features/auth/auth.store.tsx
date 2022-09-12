import { action, makeObservable, observable } from 'mobx';
import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { Endpoints, RequestService } from '../../infrastructure/request';
import UserService from '../user/user.service';
import { UserRequestType } from './auth.service';

const requestService = new RequestService();

class AuthStore extends UserService {
  isLoading = false;

  constructor() {
    super();

    makeObservable<AuthStore>(this, {
      isAuthenticated: observable,
      isLoading: observable,

      setIsLoading: action,
      setIsAuthenticated: action,

      initUser: action,
      login: action,
      logout: action,
      redirect: action,
    });
  }

  initUser = (): void => {
    if (this.storage.checkItem()) this.redirect();
  };

  login = async ({ email, password, phone }: UserRequestType): Promise<void> => {
    const reqData = { email, password, phone };

    try {
      const response = await requestService.post({ body: reqData, relativeURL: Endpoints.login });

      if (response) {
        this.storage.setItem(true);
        this.redirect();
      } else throw new Error(response);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message);
    }
  };

  logout = async (): Promise<void> => {
    this.setIsLoading(true);

    try {
      const response = await requestService.post({ relativeURL: Endpoints.logout });

      if (response) {
        this.storage.removeItem();
        this.setIsAuthenticated(false);
        this.setUserName(null);
      } else throw new Error(response);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  redirect = async (): Promise<void> => {
    this.setIsLoading(true);
    this.setIsAuthenticated(true);

    await this.redirectToKitty();

    this.setIsLoading(false);
  };
}

const authStore = new AuthStore();

const AuthStoreContext = createContext<AuthStore>(authStore);

export const AuthStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AuthStoreContext.Provider value={authStore}>{children}</AuthStoreContext.Provider>;
};

export const useAuthStoreContext = () => {
  const authContext = useContext(AuthStoreContext);

  if (!authContext) {
    throw Error('useAuthStoreContext should be used within AuthStoreProvider');
  }

  return authContext;
};
