import { FooterContainer, StyledFooter, StyledLink } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          GitHub: <StyledLink href="https://github.com/kurakinasv">kurakinasv</StyledLink>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
