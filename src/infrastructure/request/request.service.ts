import { HttpMethod } from '../../features/auth/auth.entity';
import { GetRequestOptions, PostRequestOptions } from './request.types';

export class RequestService {
  private headers = {} as Headers;

  get = async ({ relativeURL, headers }: GetRequestOptions): Promise<Response | undefined> => {
    const fetchData = async () => {
      try {
        return await fetch(relativeURL, {
          headers: {
            ...this.headers,
            ...(headers ? headers : {}),
          },
        } as RequestInit);
      } catch (error: unknown) {
        this.handleFetchError(error, relativeURL);
      }
    };

    const response = await fetchData();
    if (response) return this.handleResponse(response);
  };

  post = async ({ body, relativeURL, headers }: PostRequestOptions): Promise<Response | undefined> => {
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
      } catch (error: unknown) {
        this.handleFetchError(error, relativeURL);
      }
    };

    const response = await fetchData();
    if (response) return this.handleResponse(response);
  };

  handleResponse = async (response: Response) => {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.message} (${response.status} ${response.statusText})`);
    }

    return data;
  };

  handleFetchError = (error: unknown, path: string) => {
    if (error instanceof Error) {
      throw new Error(`${path.split('/')[3]} error: ${error.message}`);
    }
  };
}
