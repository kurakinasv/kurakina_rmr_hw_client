import styled from 'styled-components';
import colors from '../../colors';
import { flex } from '../../mixins';
import { media } from '../../vars';

export const PopupWrapper = styled.div<{ isOpen: boolean }>`
  min-width: 300px;
  max-width: 500px;
  padding: 22px 16px;

  position: absolute;
  top: 10vh;

  background-color: ${colors.white};
  border: 4px solid ${colors.purple};
  border-radius: 4px;

  ${flex('center', 'center')}
  text-align: center;

  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(50px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  transition-property: transform opacity;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: ${media.tablet}) {
    min-width: 200px;
    max-width: 400px;
    padding: 18px 12px;
  }

  @media (max-width: ${media.mobile}) {
    max-width: 320px;
  }
`;

export const Content = styled.div`
  color: ${colors.purple};
`;
