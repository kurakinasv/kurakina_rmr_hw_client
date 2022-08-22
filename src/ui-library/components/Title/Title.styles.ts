import styled from 'styled-components';
import colors from '../../colors';
import { media } from '../../vars';

export const StyledTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;

  color: ${colors.darkGrey};

  @media (max-width: ${media.mobile}) {
    margin-bottom: 18px;
    font-size: 30px;
  }
`;
