import { FC, ReactNode } from 'react';
import { StyledLink } from './Link.styles';

type LinkProps = {
  children: string | ReactNode;
  url: string;
  label?: string | ReactNode;
  fontWeight?: number;
};

const Link: FC<LinkProps> = ({ children, url, label, fontWeight }) => {
  return (
    <StyledLink fontWeight={fontWeight}>
      {label}
      <a href={url} target="_blank" rel="noreferrer">
        {children}
      </a>
    </StyledLink>
  );
};

export default Link;
