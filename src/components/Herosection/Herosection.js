import React from 'react';
import TextBox from '../TextBox/TextBox';
import ImageSh from '../ImageSh/ImageSh';
import Logos from '../Logos/Logos';
import './Herosection.css';
import Statique from '../Statique/Statique';
import Card from '../Card/Card';
const Herosection = (props) => {      
    return(<div className="herosection">
               <div className="container">
                    <div className="container-flex__hero" style={{flexDirection: props.dir ? 'row' : 'row-reverse', alignContent: props.card.statu ? 'flex-start' : ''}}>
                           <TextBox 
                           id={props.id}
                           pur={props.pur} 
                           content={{...props.content}}
                           someLink={props.someLink}
                           alignCenter={props.dir ? "center-left" : "center-right"}
                           />
                           {/* add the images side  */}
                           {props.img.exist&&<ImageSh img={{...props.img.img}} statu={true} alignCenter={!props.dir ? "center-left" : "center-right"} id={props.id}/>}
                           {/*add some feature to a special section  */}
                           {props.statique.statu&&<Statique />}
                           {props.card.statu&&<Card />}
                    </div>
                     
               </div>
               
        </div>);
}
export default Herosection;