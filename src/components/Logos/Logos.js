import React from 'react';
import './Logos.css';
function Logos(props) {
    return(<div className="logos-container">
        {props.logos.logosImg.map((item, index) => {
            return (<div className="cont-logo" key={index}><img src={`./images/${item}`} alt="logos-devloper" /></div>);
        })}
    </div>)
}
export default Logos;