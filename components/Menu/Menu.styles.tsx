import styled from "styled-components";
import { Button } from '../Buttons';

export const MenuStyled = styled.nav`
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  block-size: 111px;
  width: 1920px;
  text-align: center;
  margin: auto;  
`;

export const MenuTitle = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};  
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
`
export const User = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: 500;
`


export const NavItem = styled.div`

`;

export const MenuButton = styled(Button)`
  font-family: 'Lato';
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
`