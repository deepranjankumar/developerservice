import React from 'react';
import './index.css'
import Card from './Card'
import Data from './Sdata'
const Service =()=>{
    return(<>
    <h1 style={{textAlign: 'center',marginBottom:'35px'}}> Our Services</h1>
    <div className="card-container">
       {
    Data.map((val,index)=>{
        return(<Card
            imgsrc={val.imgs}
            title={val.title}
        />)
    })
       }
       </div>
    </>);
}
export default Service;