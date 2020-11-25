import React from 'react';
import './Parag.css';
const Parag = (props) => {
    return(
        <div className={`parag signika ${props.simpleTitle > 0 ? 'with-title': ''} ${props.bigbig ? 'big-para__height' : ''}`}>
               {((!props.simpleTitle)&&!props.bigbig)&&<h2>{props.smallTitle}</h2>}
               <p>{props.parag}</p>
        </div>
    );
}
export default Parag;