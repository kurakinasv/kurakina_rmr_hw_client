import { UserResponseType } from './auth.service';

export type User = Pick<UserResponseType, 'name'>;

export enum EndpointsEnum {
  login = '/api/v1/login',
  logout = '/api/v1/logout',
  profile = '/api/v1/profile',
  kitty = '/api/v1/kitty',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}
