import { makeAutoObservable } from 'mobx';
import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { RequestService } from '../../infrastructure/request/request.service';
import { EndpointsEnum, User } from './auth.entity';
import { KittyResponseType, parseServerData, UserRequestType } from './auth.service';

const requestService = new RequestService();

class AuthStore {
  readonly storageName = 'isLogged';

  isAuthenticated = false;
  user = {} as User;
  userRequestData = {} as UserRequestType;
  kittySrc: KittyResponseType['src'] = '';

  constructor() {
    makeAutoObservable(this);
  }

  initUser = (): void => {
    const storageData = localStorage.getItem(this.storageName);
    const data = JSON.parse(String(storageData));

    if (data && data.isLogged) this._redirectToKitty();
  };

  login = async ({ email, password, phone }: UserRequestType): Promise<void> => {
    try {
      this.userRequestData = { email, password, phone };

      await requestService.post({ body: this.userRequestData, relativeURL: EndpointsEnum.login });

      localStorage.setItem(this.storageName, JSON.stringify({ isLogged: true }));
      this._redirectToKitty();
    } catch (e: any) {
      throw new Error(`Login error: ${e.message}`);
    }
  };

  logout = async (): Promise<void> => {
    try {
      await requestService.post({ relativeURL: EndpointsEnum.logout });

      localStorage.removeItem(this.storageName);
      this.setIsAuthenticated(false);
    } catch (e: any) {
      throw new Error(`Login error: ${e.message}`);
    }
  };

  getKitty = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: EndpointsEnum.kitty });
      this.setKittySrc(data);
    } catch (e: any) {
      throw new Error(`Kitty request error ${e.message}`);
    }
  };

  getUserProfile = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: EndpointsEnum.profile });
      this.setUserName(data);
    } catch (e: any) {
      throw new Error(`Profile request error ${e.message}`);
    }
  };

  setIsAuthenticated = (value: boolean) => {
    this.isAuthenticated = value;
  };

  setUserName = (data: Response) => {
    this.user.name = parseServerData(data).name;
  };

  setKittySrc = (data: Response) => {
    this.kittySrc = parseServerData(data).src;
  };

  _redirectToKitty = (): void => {
    this.getKitty()
      .then(() => this.getUserProfile())
      .then(() => this.setIsAuthenticated(true));
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
