import styled from 'styled-components';

export const KittyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: 24px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  font-size: 36px;
  color: #282828;
`;

export const KittyImg = styled.img`
  min-width: 300px;
  max-width: 25vw;
  padding: 5px;
  border: 2px dashed #cabddb;
`;

export const Button = styled.button`
  background-color: #7d5ba6;
  padding: 16px 22px;
  border-radius: 4px;
  border: none;
  font-size: 22px;
  color: #fff;
`;
