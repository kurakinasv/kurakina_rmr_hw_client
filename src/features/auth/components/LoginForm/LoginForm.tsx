import { Formik, ErrorMessage } from 'formik';
import { FC } from 'react';
import Button from '../../../../ui-library/components/Button';
import { initialValues } from '../../auth.constants';
import { UserRequestType } from '../../auth.service';
import { useAuthStoreContext } from '../../auth.store';
import { validateHandler } from '../../auth.validation';
import { StyledForm, StyledField, TextError, FieldWrapper } from './LoginForm.styles';

const LoginForm: FC = () => {
  const { login } = useAuthStoreContext();

  const submitHandler = (data: UserRequestType) => {
    login(data);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler} validate={validateHandler}>
      {({ isSubmitting }) => (
        <StyledForm>
          <FieldWrapper>
            <StyledField name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component={TextError} />
          </FieldWrapper>

          <FieldWrapper>
            <StyledField name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component={TextError} />
          </FieldWrapper>

          <FieldWrapper>
            <StyledField name="phone" type="text" placeholder="Phone" />
            <ErrorMessage name="phone" component={TextError} />
          </FieldWrapper>

          <Button type="submit" disabled={isSubmitting} fillBackground>
            Go To Kitty
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
