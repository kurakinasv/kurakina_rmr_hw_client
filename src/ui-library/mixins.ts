import { css } from 'styled-components';
import { AlignType, DirectionType, JustifyType } from './types';

export const size = (w: string, h?: string) => css`
  width: ${w};
  height: ${h || w};
`;

export const flex = (
  align: AlignType = 'normal',
  justify: JustifyType = 'normal',
  direction: DirectionType = 'row'
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

export const containerLayout = (width = '80vw') => css`
  width: ${width};
  margin: 0 auto;
`;
