import styled from 'styled-components';
import { Form, Field } from 'formik';
import { flex } from '../../../../ui-library/mixins';
import colors from '../../../../ui-library/colors';

export const StyledForm = styled(Form)`
  ${flex('center', 'center', 'column')}
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;
`;

export const StyledField = styled(Field)`
  width: 30vw;
  min-width: 320px;

  padding: 20px 16px;

  border-radius: 4px;
  border: 2px solid ${colors.grey};
`;

export const TextError = styled.div`
  margin-top: 5px;

  font-size: 14px;
  color: ${colors.pink};
`;
