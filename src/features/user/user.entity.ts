import { UserResponseType } from '../auth';

export type User = Pick<UserResponseType, 'name'>;
