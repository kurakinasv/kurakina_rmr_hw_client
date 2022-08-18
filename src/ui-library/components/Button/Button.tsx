import { FC, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

type ButtonProps = {
  children: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  fillBackground?: boolean;
  onClick?: VoidFunction;
};

const Button: FC<ButtonProps> = ({ onClick, children, type = 'button', disabled = false, fillBackground = false }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} fillBackground={fillBackground}>
      {children}
    </StyledButton>
  );
};

export default Button;
