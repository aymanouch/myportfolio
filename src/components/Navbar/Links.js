import React, {useEffect} from 'react';
import Button from '../Button/Button';
import gsap from 'gsap';
import './link.css';
const links = ['home', 'about me','services', 'works' , 'testimonials']
function Links(props) {
   const clickIcon = () => {
      if(props.show) {
         gsap.to('ul.list-menu', {height:'100%'});
      } else {
         gsap.to('ul.list-menu', {height:'0'})
      }
   }
   window.addEventListener('resize', function() {
      clickIcon();
   })
   clickIcon();
    useEffect(()=> {
       if(window.innerWidth > 991) {
         gsap.from('.list-menu li', {y:-100, duration:1, opacity:0,stagger:.5});
       }
    }, [])
    return (<ul className="list-menu marvel" >
               {links.map((item, index) => {
                  return(<li key={index}>{item}<span></span></li>);  
               })  }
               <li><Button info={{bg:'none'}} content="download cv" /></li>
    </ul>)
}
export default Links;