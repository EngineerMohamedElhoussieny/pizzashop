import React,{useState} from 'react'
import {GlobalStyle} from './Styles/GlobalStyle'
import {Banner} from './Banner/Banner'
import { Menu } from './Menu/Menu'
import {Navbar} from './Navbar/Navbar'

function App() {
  const [openFood,setOpenFood]=useState();

  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Banner /> 
    <div>{openFood}</div>
    <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
