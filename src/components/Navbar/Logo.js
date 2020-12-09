import React, {useEffect} from 'react';
import gsap from 'gsap';
 function Logo() {
     useEffect(() => {
      gsap.from('.logo',{x:-100, duration:1});
     }, [])
     return(<div className="logo">
               <img src="./images/logo.png" alt="aymanouch" />
            </div>);
 }

 export default Logo;