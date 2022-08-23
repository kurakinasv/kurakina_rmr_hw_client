import { FC, ReactNode } from 'react';
import { StyledTitle } from './Title.styles';

type TitleProps = {
  children: string | ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
