import styled from 'styled-components';
import colors from '../../colors';

export const StyledLink = styled.div<{ fontWeight?: number }>`
  padding: 16px 0;

  a {
    color: ${colors.purple};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    cursor: pointer;
  }
`;
