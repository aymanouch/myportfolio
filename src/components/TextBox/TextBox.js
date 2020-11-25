import React from 'react';
import Parag from '../Parag/Parag';
import Title from '../Title/Title';
import SomeLink from '../SomeLink/SomeLink';
import "./TextBox.css";
const TextBox = (props) => {
    return(
        <div className={`text-box__text ${props.pur? 'maxwidth' : ''}`}>
            <div className={`container-text__flex`} >
                 <div className="itme1 itme-text__textbox">
                <Title 
                 bigbig={props.content.bigbig} 
                 smallTitle={props.content.smallTitle} 
                 bigTitle={props.content.bigTitle}
                 otherTitle={props.content.otherTitle}
                 simpleTitle={props.content.simpleTitle} />
                 </div>
                 <div className="itme2 itme-text__textbox">
                     <Parag simpleTitle={props.content.simpleTitle} 
                     bigbig={props.content.bigbig} 
                     smallTitle={props.content.smallTitle} 
                     parag={props.content.parag}/></div>
            </div>
            
            {props.someLink&&<SomeLink />}
        </div>
    );
}

export default TextBox;