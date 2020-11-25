import React from 'react';
import TextBox from '../TextBox/TextBox';
import ImageSh from '../ImageSh/ImageSh';
import Logos from '../Logos/Logos';
import './Herosection.css';
const Herosection = (props) => {
      
    return(<div className="herosection">
               <div className="container">
                    <div className="container-flex__hero" style={{flexDirection: props.dir ? 'row' : 'row-reverse'}}>
                           <TextBox 
                           pur={props.pur} 
                           content={{...props.content}}
                           someLink={props.someLink}
                           />
                           {props.img.exist&&<ImageSh img={{...props.img.img}} statu={true}/>}
                    </div>
                    {props.logos.statu&&<Logos logos={{...props.logos}}/>}
               </div>
               
        </div>);
}
export default Herosection;