import styled from 'styled-components';
import colors from '../../../../ui-library/colors';
import { containerLayout, flex, size } from '../../../../ui-library/mixins';

export const StyledHeader = styled.header`
  ${size('100%', '90px')}

  position: sticky;
  top: 0;
  left: 0;

  ${flex('center')}

  border-bottom: 2px dashed ${colors.lightPurple};
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
`;

export const HeaderContainer = styled.div`
  ${containerLayout()}

  ${flex('center', 'space-between')}
`;

export const Logo = styled.div`
  ${flex('center')}

  img {
    height: 70px;
    margin-right: 10px;
  }

  span {
    color: ${colors.purple};
    font-size: 30px;
    font-weight: 700;
    user-select: none;
  }
`;

export const StyledLink = styled.div`
  padding: 16px 26px;

  a {
    color: ${colors.purple};
    font-weight: 700;
  }

  :hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    cursor: pointer;
  }
`;

export const User = styled.div`
  ${flex('center')}
  color: ${colors.purple};
`;

export const UserPic = styled.div`
  ${size('60px')}
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${colors.lightPurple};

  ${flex('center')}
  text-align: center;

  span {
    width: 100%;

    font-size: 30px;
    line-height: 1;
  }
`;
