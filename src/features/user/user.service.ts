import { Endpoints, parseServerData, RequestService } from '../../infrastructure/request';
import { User } from './user.entity';
import { IUserService, KittyResponseType } from './user.types';

const requestService = new RequestService();

class UserService implements IUserService {
  user: User;
  kittySrc: KittyResponseType['src'];

  constructor() {
    this.user = {} as User;
    this.kittySrc = '';
  }

  getKitty = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: Endpoints.kitty });
      if (data) this.setKittySrc(data);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(`Kitty request error ${e.message}`);
    }
  };

  getUserProfile = async (): Promise<void> => {
    try {
      const data = await requestService.get({ relativeURL: Endpoints.profile });
      if (data) this.setUserName(data);
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(`Profile request error ${e.message}`);
    }
  };

  setUserName = (data: Response | null) => {
    this.user.name = data ? parseServerData(data).name : '';
  };

  setKittySrc = (data: Response | null) => {
    this.kittySrc = data ? parseServerData(data).src : '';
  };

  redirectToKitty = async (): Promise<void> => {
    await this.getKitty();
    await this.getUserProfile();
  };
}

export default UserService;
