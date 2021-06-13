import React from 'react'
import {GlobalStyle} from './Styles/GlobalStyle'
import {Banner} from './Banner/Banner'
import { Menu } from './Menu/Menu'
import {Navbar} from './Navbar/Navbar'

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Banner /> 
    <Menu />
    </>
  );
}

export default App;
