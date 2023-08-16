import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
const Menu=()=>{
    return(<>
        <div className="navbar">
       <h1>Deep Website</h1>
        <NavLink  to="/">Home</NavLink>
        <NavLink  to="/service"> Services</NavLink>
        <NavLink  to="/about">About</NavLink>
        <NavLink  to="/contact"> ContactUs</NavLink>
      </div>
    </>)
}
export default Menu;