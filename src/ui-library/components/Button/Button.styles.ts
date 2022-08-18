import styled, { css } from 'styled-components';
import colors from '../../colors';

export const StyledButton = styled.button<{ fillBackground: boolean }>`
  padding: 16px 26px;
  font-size: 22px;
  border-radius: 4px;

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
    ${({ fillBackground }) => fillBackground && `background-color: #dddddd;`}
  }
`;
