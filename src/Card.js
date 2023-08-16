import React from "react";
const Card=(props)=>{
    return(<>
         <div className="card">
        <img src={props.imgsrc} alt="cards"/>
            <h1 style={{marginBottom:'0px'}}>{props.title}</h1>
            <p> Some Quick Example text to build on the card title and make up the bulk of the cards contents </p>
            <button >Check Now </button>
        </div>
    </>)
}
export default Card;