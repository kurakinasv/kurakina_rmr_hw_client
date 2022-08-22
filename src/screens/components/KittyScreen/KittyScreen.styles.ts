import styled from 'styled-components';
import colors from '../../../ui-library/colors';
import { flex, minSize } from '../../../ui-library/mixins';
import { media } from '../../../ui-library/vars';

export const KittyWrapper = styled.div`
  ${flex('center', null, 'column')}
`;

export const KittyImg = styled.img`
  ${minSize('320px')}
  max-width: 28vw;

  padding: 5px;
  border: 2px dashed ${colors.lightPurple};

  @media (max-width: ${media.mobile}) {
    ${minSize('250px')}
  }
`;
