import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { flex } from '../../../../ui-library/mixins';
import colors from '../../../../ui-library/colors';
import { media } from '../../../../ui-library/vars';

export const StyledForm = styled(Form)`
  ${flex('center', 'center', 'column')}
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;
`;

const fieldWidth = css`
  width: 35vw;
  min-width: 350px;

  @media (max-width: ${media.smallTablet}) {
    width: 75vw;
    min-width: 280px;
  }
`;

export const StyledField = styled(Field)`
  ${fieldWidth}

  padding: 20px 16px;

  border-radius: 4px;
  border: 2px solid ${colors.grey};

  @media (max-width: ${media.smallTablet}) {
    padding: 16px 16px;
  }
`;

export const TextError = styled.div`
  ${fieldWidth}

  margin-top: 5px;

  font-size: 14px;
  color: ${colors.pink};
`;
