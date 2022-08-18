import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 90px;

  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  border-bottom: 2px dashed #cabddb;
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
`;

export const HeaderContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 70px;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  color: #7d5ba6;
  font-size: 30px;
  font-weight: 700;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #7d5ba6;
`;

export const UserPic = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: #cabddb;

  display: flex;
  align-items: center;
  text-align: center;

  span {
    line-height: 1;
    width: 100%;
    font-size: 30px;
    display: inline-block;
  }
`;
