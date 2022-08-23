export type UserRequestType = {
  email: string;
  password: string;
  phone: string;
};

export type UserResponseType = {
  id: string;
  name: string;
} & UserRequestType;

type LocalStorageData = { [key: string]: unknown };

export class LocalStorage {
  readonly storageItemName: string;

  constructor(itemName: string) {
    this.storageItemName = itemName;
  }

  checkItem = (): boolean => {
    const storageData = this.getItem();
    const data: LocalStorageData = JSON.parse(String(storageData));

    return !!data;
  };

  getItem = (): string | null => {
    return localStorage.getItem(this.storageItemName);
  };

  setItem = (value: unknown): void => {
    localStorage.setItem(this.storageItemName, JSON.stringify(value));
  };

  removeItem = (): void => {
    localStorage.removeItem(this.storageItemName);
  };
}
