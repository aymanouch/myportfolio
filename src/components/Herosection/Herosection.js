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
       const pencentage = window.innerWidth >= 991 ? 0.2 : 0.15;
       const sectionRef = useRef(null);
       const worksRef = useRef(null);
       //create first intersection 
       const intersection = useIntersection(sectionRef, {
             root:null,
             rootMargin:"0px",
             threshold:pencentage
       });
       // create second intersection 
       const intersection1 = useIntersection(worksRef, {
              root:null,
              rootMargin:"0px",
              threshold:pencentage
       })
       //create a function test fadeout for testing useintersection 
       const fadeOut = () => {
              if(sectionRef.current!==null) {
                     gsap.to(sectionRef.current, {x:0, opacity:1});
                     
              }
       }
       const fadeIn= () => {
              if(sectionRef.current!==null) {
                     gsap.to(sectionRef.current, {x:-100, opacity:0});
              }
       }
       const fadeCardIn = () => {
              if(worksRef.current!==null) {
                     gsap.to(".card-galary__galary", {y:100, opacity:0, stagger:0.2});  
              }
       }
       const fadeCardOut = () => {
              if(worksRef.current!==null) {
                    
                     gsap.to(".card-galary__galary", {y:0, opacity:1, stagger:0.2});
              }
       }
intersection && intersection.intersectionRatio <= pencentage
? fadeIn()
: fadeOut();

intersection1 && intersection1.intersectionRatio < pencentage 
? fadeCardIn()
: fadeCardOut();
    return(<div className="herosection" id={props.name}>
               <div className="container" ref={props.name!=="home" ? sectionRef : null}>
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
                           {props.works&&<GalaryWork works={props.works} worksRef={worksRef}/>}
                    </div>
                     
               </div>
               
        </div>);
}
export default Herosection;