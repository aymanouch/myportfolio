import React from 'react';
import './Title.css';
const Title = (props) => {
    return(
    <div className={`title ninuto ${props.bigbig ? 'bigbig' : props.simpleTitle ? 'simple-title' : 'complexe-title'}`}>
             <h1 >
                 {(props.simpleTitle)&&<span className="small-title simple-title">{props.smallTitle}</span>}
                 {props.bigTitle}<br />
                 {props.bigbig&&<span className='ohter-title'>{props.otherTitle}</span>}
             </h1>
    </div>);
}
export default Title;