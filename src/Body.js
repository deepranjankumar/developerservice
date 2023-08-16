import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
 const Body=(props)=>{
    const navigate = useNavigate();
   
  const Contact=(link)=>{
    navigate(link)
  }
    return(<>
    <div className="section-list">
    <div>
        <h1>{props.name}</h1>
        <h1><span style={{color:'green'}}>DeepWebsite</span></h1>
        <p>We are Team of talented developer making your website</p>
        <button style={{color:'green',borderRadius:"9px",cursor:'pointer'}} onClick={()=>{Contact(props.visit)}}>{props.btn}</button>
        </div>
        <img src={props.imgs} alt='Love'/>
        </div>
    </>)
 }
 export default Body;