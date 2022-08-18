import styled from 'styled-components';
import colors from '../../../ui-library/colors';
import { flex } from '../../../ui-library/mixins';

export const KittyWrapper = styled.div`
  ${flex('center', null, 'column')}
`;

export const KittyImg = styled.img`
  min-width: 300px;
  min-height: 300px;
  max-width: 25vw;

  padding: 5px;
  border: 2px dashed ${colors.lightPurple};
`;
