import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #dddddd;
`;

export const FooterContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  div {
    text-align: center;
    font-size: 14px;
    color: #525252;
  }
`;

export const StyledLink = styled.a`
  color: #7d5ba6;

  :hover {
    border-bottom: 1px solid #7d5ba6;
  }
`;
