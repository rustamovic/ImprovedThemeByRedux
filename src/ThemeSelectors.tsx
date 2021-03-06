import React from 'react';
import {useDispatch} from 'react-redux' 
import styled from 'styled-components';
import { applyTheme } from './redux/themeActions';
import { dark, light, party} from './themes';
const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
`;

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme))
  }
return (
    <div>
      <StyledButton onClick={()=> changeTheme(dark)}>Dark</StyledButton>
      <StyledButton onClick={()=> changeTheme(light)}>Light</StyledButton>
      <StyledButton onClick={()=> changeTheme(party)}>Party</StyledButton>
    </div>
  );
}
export default ThemeSelector;