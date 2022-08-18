export type UserRequestType = {
  email: string;
  password: string;
  phone: string;
};

export type UserResponseType = {
  id: string;
  name: string;
} & UserRequestType;

export type KittyResponseType = {
  src: string;
};

export const parseServerData = (data: unknown): { [key: string]: string } => {
  const obj = {} as { [key: string]: string };
  const stringifiedData = JSON.stringify(data);
  JSON.parse(stringifiedData, (name: string, value: string) => (obj[name] = value));

  return obj;
};
