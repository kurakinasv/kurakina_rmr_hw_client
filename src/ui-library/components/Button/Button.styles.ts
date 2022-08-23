import styled, { css } from 'styled-components';
import colors from '../../colors';
import { media } from '../../vars';

export const StyledButton = styled.button<{ fillBackground: boolean }>`
  padding: 16px 26px;
  border-radius: 4px;
  user-select: none;

  ${({ fillBackground }) =>
    fillBackground
      ? css`
          background-color: ${colors.purple};
          color: ${colors.white};
          transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `
      : css`
          color: ${colors.purple};
          border: 2px solid ${colors.purple};
          transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `}

  :hover {
    ${({ fillBackground }) =>
      fillBackground
        ? css`
            opacity: 0.8;
          `
        : css`
            background-color: ${colors.purple};
            color: ${colors.white};
          `}
  }

  :disabled {
    color: ${colors.white};
    background-color: ${colors.grey};
    ${({ fillBackground }) => !fillBackground && `border: 2px solid ${colors.grey};`}
    cursor: default;
  }

  @media (max-width: ${media.smallTablet}) {
    padding: 14px 20px;
  }
`;
