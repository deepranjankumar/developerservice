import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Menu from './Menu'
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Body from './Body';
const App=()=>{
  return(
  <>
  <Menu 
  />
    <Routes>
    <Route exact path='/' element={<Body
      name="Grow your Business with"
  imgs='/white.jpg'
  visit='/service'
  btn='Get Started'
    />}/>
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
  </>
  )
}
export default App;