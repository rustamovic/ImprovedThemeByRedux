import React from 'react';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import {RootState} from './redux/themeReducer';
import logo from './logo.svg';
import './App.css';
import ThemeSelector from './ThemeSelectors';

const useTSelector: TypedUseSelectorHook<RootState> = useSelector;

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props:any)=>props.theme.backgroundColor}
}`;

const StyledH1 = styled.h1`
color: ${(props:any)=>props.theme.primary}`;

function App() {
  const theme = useTSelector((state)=>state.theme)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        <StyledH1>React Themes Demo</StyledH1>
        <ThemeSelector/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
