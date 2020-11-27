import React from 'react';
import './Parag.css';
const Parag = (props) => {
    return(
        <div className={`parag signika ${(!props.simpleTitle && !props.bigbig) ? 'with-title': ''} ${props.bigbig ? 'big-para__height' : ''}`}>
               {((!props.simpleTitle)&&!props.bigbig)&&<h2 className="marvel">{props.smallTitle}</h2>}
               <p className="simple-parag__parag">{props.parag}</p>
        </div>
    );
}
export default Parag;