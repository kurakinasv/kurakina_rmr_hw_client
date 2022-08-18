import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;
`;

export const StyledField = styled(Field)`
  width: 30vw;
  min-width: 320px;

  padding: 20px 16px;

  font-size: 22px;
  border-radius: 4px;
  border: 2px solid #dddddd;
`;

export const TextError = styled.div`
  margin-top: 5px;

  color: #fc6471;
  font-size: 14px;
`;
