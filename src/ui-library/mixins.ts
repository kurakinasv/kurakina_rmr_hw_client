import { css } from 'styled-components';

export const size = (w: string, h: string) => css`
  ${h ? `width: ${w}; height: ${h};` : `width: ${w}; height: ${w};`}
`;
