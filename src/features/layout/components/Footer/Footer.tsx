import Link from '../../../../ui-library/components/Link';
import { FooterContainer, StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Link url="https://github.com/kurakinasv" label="Github: ">
          kurakinasv
        </Link>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
