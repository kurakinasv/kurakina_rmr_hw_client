import styled from 'styled-components';
import { flex } from '../../../../ui-library/mixins';
import { media } from '../../../../ui-library/vars';

export const Container = styled.div`
  min-height: 100vh;

  ${flex(null, null, 'column')}
`;

export const Content = styled.div`
  max-width: 70vw;
  margin: 30px auto;

  display: flex;
  flex: 1 1 auto;

  @media (max-width: ${media.smallTablet}) {
    max-width: 90vw;
  }
`;
