import React, {useRef} from 'react';
import TextBox from '../TextBox/TextBox';
import ImageSh from '../ImageSh/ImageSh';
import GalaryWork from  '../GalaryWork/GalaryWork';
import './Herosection.css';
import Statique from '../Statique/Statique';
import Card from '../Card/Card';
import { useIntersection } from "react-use";
import gsap from "gsap";
const Herosection = (props) => {
       const sectionRef = useRef(null);
       const intersection = useIntersection(sectionRef, {
             root:null,
             rootMargin:"0px",
             threshold:0.5
       });
       //create a function test fadeout for testing useintersection 
       const fadeOut = () => {
              console.log(sectionRef.current);
              if(sectionRef.current!==null) {
                     gsap.to(sectionRef.current, {x:100});
              }
       }
       const fadeIn= () => {
              if(sectionRef.current!==null) {
                     gsap.to(sectionRef.current, {x:0});
              }
       }
intersection && intersection.intersectionRatio < 0.5
? fadeIn()
: fadeOut();
    return(<div className="herosection" ref={props.name!=="home" ? sectionRef : null}>
               <div className="container">
                    <div className="container-flex__hero" style={{flexDirection: props.dir ? 'row' : 'row-reverse', alignContent: props.card.statu ? 'flex-start' : ''}}>
                           <TextBox 
                           id={props.id}
                           pur={props.pur} 
                           content={{...props.content}}
                           someLink={props.someLink}
                           alignCenter={props.dir ? "center-left" : "center-right"}
                           person={props.person}
                           />
                           {/* add the images side  */}
                           {props.img.exist&&<ImageSh img={{...props.img.img}} statu={props.img.statu} alignCenter={!props.dir ? "center-left" : "center-right"} id={props.id}/>}
                           {/*add some feature to a special section  */}
                           {props.statique.statu&&<Statique />}
                           {props.card.statu&&<Card />}
                           {props.works&&<GalaryWork works={props.works}/>}
                    </div>
                     
               </div>
               
        </div>);
}
export default Herosection;