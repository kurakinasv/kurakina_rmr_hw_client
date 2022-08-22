import { makeAutoObservable } from 'mobx';
import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { RequestService } from '../../infrastructure/request/request.service';
import { EndpointsEnum, User } from './auth.entity';
import { KittyResponseType, parseServerData, UserRequestType } from './auth.service';

const requestService = new RequestService();

class AuthStore {
  readonly storageName = 'isLogged';

  isAuthenticated = false;
  isLoading = false;
  user = {} as User;
  userRequestData = {} as UserRequestType;
  kittySrc: KittyResponseType['src'] = '';

  constructor() {
    makeAutoObservable(this);
  }

  isLogged = () => {
    const storageData = localStorage.getItem(this.storageName);
    const data = JSON.parse(String(storageData));

    if (data && data.isLogged) return true;
    else return false;
  };

  initUser = (): void => {
    if (this.isLogged()) this._redirectToKitty();
  };

  login = async ({ email, password, phone }: UserRequestType): Promise<void> => {
    try {
      this.userRequestData = { email, password, phone };

      const response = await requestService.post({ body: this.userRequestData, relativeURL: EndpointsEnum.login });

      if (response) {
        localStorage.setItem(this.storageName, JSON.stringify({ isLogged: true }));
        this._redirectToKitty();
      } else throw new Error(response);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message);
    }
  };

  logout = async (): Promise<void> => {
    this.setIsLoading(true);

    try {
      const response = await requestService.post({ relativeURL: EndpointsEnum.logout });

      if (response) {
        localStorage.removeItem(this.storageName);
        this.setIsAuthenticated(false);
        this.setUserName(null);
      } else throw new Error(response);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  getKitty = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: EndpointsEnum.kitty });
      if (data) this.setKittySrc(data);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(`Kitty request error ${e.message}`);
    }
  };

  getUserProfile = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: EndpointsEnum.profile });
      if (data) this.setUserName(data);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(`Profile request error ${e.message}`);
    }
  };

  setIsAuthenticated = (value: boolean) => {
    this.isAuthenticated = value;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  setUserName = (data: Response | null) => {
    this.user.name = data ? parseServerData(data).name : '';
  };

  setKittySrc = (data: Response | null) => {
    this.kittySrc = data ? parseServerData(data).src : '';
  };

  _redirectToKitty = async (): Promise<void> => {
    this.setIsLoading(true);
    this.setIsAuthenticated(true);

    await this.getKitty()
      .then(() => this.getUserProfile())
      .then(() => this.setIsLoading(false));
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
