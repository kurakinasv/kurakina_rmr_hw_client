import { User } from './user.entity';

export interface IUserService {
  user: User;
  kittySrc: KittyResponseType['src'];

  getKitty: () => Promise<void>;
  getUserProfile: () => Promise<void>;

  setUserName: (data: Response | null) => void;
  setKittySrc: (data: Response | null) => void;

  redirectToKitty: () => Promise<void>;
}

export type KittyResponseType = {
  src: string;
};
