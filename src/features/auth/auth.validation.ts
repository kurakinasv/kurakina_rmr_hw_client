import { UserRequestType } from './auth.service';

export const validateHandler = ({ email, password, phone }: UserRequestType) => {
  const errors = {} as UserRequestType;

  if (!email) errors.email = 'Email is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Incorrect email address';
  }

  if (!password) errors.password = 'Password is required';
  else if (!/^[A-Z0-9]+$/i.test(password)) {
    errors.password = 'Password must contain only letters and numbers';
  } else if (!/^[A-Z0-9]{4,}$/i.test(password)) {
    errors.password = 'Password length must be at least 4';
  }

  if (!phone) errors.phone = 'Phone number is required';
  else if (!(/^\+79[0-9]{2}[0-9]{7}$/.test(phone) || /^\+976[0-9]{10}$/.test(phone))) {
    errors.phone = 'Russian (+7) or Mongolian (+976) phone numbers are valid';
  }

  return errors;
};
