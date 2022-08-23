export type PostRequestOptions = {
  body?: object;
} & CommonRequestOptions;

export type GetRequestOptions = CommonRequestOptions;

type CommonRequestOptions = {
  relativeURL: string;
  headers?: Headers;
};

export enum Endpoints {
  login = '/api/v1/login',
  logout = '/api/v1/logout',
  profile = '/api/v1/profile',
  kitty = '/api/v1/kitty',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}
