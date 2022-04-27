
import { Checkbox } from '../Checkboxs';
import { Container, MenuStyled, MenuTitle, NavItems, User, MenuButton } from "./Menu.styles";
import { Link } from "./Menu.types";

export const Menu: React.FC<Link> = ({label}) => (
  <MenuStyled>
    <Container>      
        <MenuTitle>Главная</MenuTitle>
          <NavItems>
            <Checkbox type='checkbox'></Checkbox>
            <User>{label}</User>
            <MenuButton variants="outlined" color='#ECEEF3'>Выход</MenuButton>
          </NavItems>  
    </Container>
  </MenuStyled>
);
