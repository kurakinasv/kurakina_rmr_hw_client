import { HttpMethod } from '../../features/auth/auth.entity';
import { GetRequestOptions, PostRequestOptions } from './request.types';

export class RequestService {
  private headers = {} as Headers;

  get = async ({ relativeURL, headers }: GetRequestOptions): Promise<Response> => {
    const fetchData = async () => {
      try {
        return await fetch(relativeURL, {
          headers: {
            ...this.headers,
            ...(headers ? headers : {}),
          },
        } as RequestInit);
      } catch (error: any) {
        throw new Error(`${relativeURL} error: ${error.message}`);
      }
    };

    const response = await fetchData();

    return await response.json();
  };

  post = async ({ body, relativeURL, headers }: PostRequestOptions) => {
    const isFormData = body instanceof FormData;

    let newBody: BodyInit | undefined = undefined;
    if (body && isFormData) {
      newBody = body as BodyInit;
    } else if (body) {
      newBody = JSON.stringify(body) as BodyInit;
    }

    const fetchData = async () => {
      try {
        return await fetch(relativeURL, {
          method: HttpMethod.POST,
          headers: {
            ...(isFormData || !body ? {} : { 'Content-Type': 'application/json' }),
            ...this.headers,
            ...(headers ? headers : {}),
          },
          body: newBody,
        });
      } catch (error: any) {
        throw new Error(`${relativeURL} error: ${error.message}`);
      }
    };

    const response = await fetchData();

    return await response.json();
  };
}
