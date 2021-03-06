import React, {useEffect} from 'react';
import Button from '../Button/Button';
import gsap from 'gsap';
import './link.css';
import jump from "jump.js";
const links = ['home', 'about me','services', 'works' , 'testimonials']
function Links(props) {
    useEffect(()=> {
       if(window.innerWidth > 991) {
         gsap.from('.list-menu li', {y:-100, duration:1, opacity:0,stagger:.5});
       }
    }, []);
    const clickIcon = () => {
      if(props.show) {
         gsap.to('ul.list-menu', {height:'100%'});
      } else {
         gsap.to('ul.list-menu', {height:'0'});
      }
   }
   window.addEventListener('resize', function() {
      clickIcon();
   })
   clickIcon();
   const clickLink = (item) => {
      props.handleClick();
      jump(`#${item!=="about me" ? item : "about"}`);
   }
    return (<ul className="list-menu marvel" >
               {links.map((item, index) => {
                  return(<li key={index} onClick={()=>{clickLink(item)}}>{item}<span></span></li>);  
               })  }
               <li><a href="./documents/aymanouch-cv.pdf" download="aymanouch-cv.pdf"><Button info={{bg:'none'}} content="download cv" /></a></li>
    </ul>)
}
export default Links;