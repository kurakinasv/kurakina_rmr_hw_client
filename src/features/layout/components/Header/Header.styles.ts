import styled from 'styled-components';
import colors from '../../../../ui-library/colors';
import { containerLayout, flex, size } from '../../../../ui-library/mixins';
import { media } from '../../../../ui-library/vars';

export const StyledHeader = styled.header`
  ${size('100%', '90px')}

  position: sticky;
  top: 0;
  left: 0;

  ${flex('center')}

  border-bottom: 2px dashed ${colors.lightPurple};
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);

  @media (max-width: ${media.smallTablet}) {
    ${size('100%', '80px')}
  }
`;

export const HeaderContainer = styled.div`
  ${containerLayout()}

  ${flex('center', 'space-between')}

  @media (max-width: ${media.mobile}) {
    ${containerLayout('90vw')}
  }
`;

export const Logo = styled.div`
  ${flex('center')}

  img {
    height: 70px;
    margin-right: 10px;
    user-select: none;
  }

  span {
    color: ${colors.purple};
    font-size: 30px;
    font-weight: 700;
    user-select: none;
  }

  @media (max-width: ${media.smallTablet}) {
    img {
      height: 60px;
    }

    span {
      display: none;
    }
  }
`;

export const User = styled.div`
  ${flex('center')}
  color: ${colors.purple};

  @media (max-width: ${media.mobile}) {
    max-width: 32vw;

    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
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
    user-select: none;
  }

  @media (max-width: ${media.tablet}) {
    display: none;
  }
`;
