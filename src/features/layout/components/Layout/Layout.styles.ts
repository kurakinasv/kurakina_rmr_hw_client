import styled from 'styled-components';
import { flex } from '../../../../ui-library/mixins';

export const Container = styled.div`
  min-height: 100vh;

  ${flex(null, null, 'column')}
`;

export const Content = styled.div`
  max-width: 70vw;
  margin: 50px auto;

  display: flex;
  flex: 1 1 auto;
`;
