import styled from 'styled-components';
import colors from '../../../../ui-library/colors';
import { containerLayout, flex, size } from '../../../../ui-library/mixins';
import { media } from '../../../../ui-library/vars';

export const StyledFooter = styled.footer`
  ${size('100%', '90px')}

  ${flex('center', 'center', 'column')}

  background-color: ${colors.grey};

  @media (max-width: ${media.mobile}) {
    ${size('100%', '80px')}
  }
`;

export const FooterContainer = styled.div`
  ${containerLayout()}

  div {
    text-align: center;
    font-size: 14px;
    color: ${colors.darkGrey};
  }
`;

export const StyledLink = styled.a`
  color: ${colors.purple};

  :hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
