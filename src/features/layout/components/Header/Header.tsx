import { FC } from 'react';
import Button from '../../../../ui-library/components/Button';
import { useAuthStoreContext } from '../../../auth/auth.store';
import { images } from '../../images';
import { StyledHeader, HeaderContainer, Logo, LogoImg, LogoText, User, UserName, UserPic } from './Header.styles';

const Header: FC = () => {
  const { isAuthenticated, logout, user } = useAuthStoreContext();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>
          <LogoImg src={images.catLogo} alt="cat-logo" />
          <LogoText>GetCat</LogoText>
        </Logo>

        {isAuthenticated && (
          <>
            <User>
              <UserPic>
                <span role="img" aria-label="cat">
                  🐱‍👓
                </span>
              </UserPic>
              <UserName>{user.name}</UserName>
            </User>
            <Button onClick={logout}>Logout</Button>
          </>
        )}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
