import styled from 'styled-components';
import colors from '../../colors';
import { flex, size } from '../../mixins';

export const LoaderWrapper = styled.div`
  ${flex('center')}
`;

export const StyledLoader = styled.div`
  ${size('70px')}

  border: 10px solid ${colors.grey};
  border-top: 10px solid ${colors.purple};
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
