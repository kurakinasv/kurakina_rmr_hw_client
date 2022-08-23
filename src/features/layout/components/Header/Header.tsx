import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import Button from '../../../../ui-library/components/Button';
import Link from '../../../../ui-library/components/Link';
import { useAuthStoreContext } from '../../../auth';
import { images } from '../../images';
import { StyledHeader, HeaderContainer, Logo, User, UserPic } from './Header.styles';

const Header: FC = () => {
  const { isAuthenticated, logout, user, isLoading } = useAuthStoreContext();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>
          <img src={images.catLogo} alt="cat-logo" />
          <span>GetCat</span>
        </Logo>

        {isAuthenticated ? (
          <>
            {user.name && (
              <User>
                <UserPic>
                  <span role="img" aria-label="cat">
                    🐱‍👓
                  </span>
                </UserPic>
                <span>{user.name}</span>
              </User>
            )}
            <Button onClick={logout} disabled={isLoading}>
              Logout
            </Button>
          </>
        ) : (
          <Link url="https://youtu.be/TE2DdWCYJHg" fontWeight={700}>
            Some Link
          </Link>
        )}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default observer(Header);
