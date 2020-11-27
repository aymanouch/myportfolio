import React from 'react';
import './ImageSh.css';
function ImageSh (props) {
    let resultat;
    if(props.statu) {
        resultat = (<div className="image-wrapper_only">
        <img alt={props.img.name} src={props.img.src} style={{display: props.id=== 2 ? 'none' : ''}}/> 
    </div>);
    } else {
        resultat = (<div className="image-wrapper_tow">
        <img alt={props.img.name[0]} src={props.img.src[0]} />
        <img alt={props.img.name[1]} src={props.img.src[1]} />
 </div>)
    }
    return(<div className={`container-image ${props.alignCenter} ${props.id === 2 ? "about-image" : ""}`} style={{backgroundImage: props.id === 2 ? "url('./images/back-01.jpg')" : "", backgroundSize:'cover'}}>
            {resultat}
    </div>);
}
export default ImageSh;