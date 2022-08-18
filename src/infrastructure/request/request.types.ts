export type PostRequestOptions = {
  body?: object;
} & CommonRequestOptions;

export type GetRequestOptions = CommonRequestOptions;

type CommonRequestOptions = {
  relativeURL: string;
  headers?: Headers;
};
