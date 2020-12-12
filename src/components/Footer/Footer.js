import { Button } from "@material-ui/core";
import React, {useRef} from "react";
import './Footer.css';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import $ from "jquery";
import gsap from "gsap";
import {useIntersection} from "react-use";
function Footer() {
    const footerRef = useRef(null),
    pencentage = window.innerWidth >= 991 ? 0.2 : 0.15,
    intersection = useIntersection(footerRef, {
        root:null,
        rootMargin:'0px',
        threshold:pencentage

    })
    const fadeFooIn = () => {
        gsap.to('footer .cont-logo__footer', {x:0, opacity:1,rotation:0, duration:1.5});
        gsap.to('footer .form-parte__footer button', {x:0, opacity:1});
        gsap.to('footer .form-parte__footer input', {y:0, opacity:1});
        gsap.to(".cont-list__socialmedia li", {x:0, opacity:1, stagger:.5});
        
    },
    fadeFooOut = () => {
        gsap.to('footer .cont-logo__footer', {x:50, opacity:0,rotation:-45});
        gsap.to('footer .form-parte__footer button', {x:50, opacity:0});
        gsap.to('footer .form-parte__footer input', {y:-50, opacity:0});
        gsap.to(".cont-list__socialmedia li", {x:200, opacity:0, stagger:.5});
    }
intersection && intersection.intersectionRatio > pencentage
? fadeFooIn()
: fadeFooOut();
       return(<footer className="footer" ref={footerRef}>
           <div className="left-side__footer center-left">
                  <div className="logo-parte__footer">
                         <div className="cont-logo__footer">
                             <img src="./images/logo.png" alt="aymanouchedih" />
                         </div>
                  </div>
                  <div className="form-parte__footer">
                      <form id="myForm">
                          <div>
                              <input type="text" placeholder="your phone or email address" id="youremail" name="phone-email"/>
                          </div>
                      </form>
                      <Button color="primary"  variant="contained" onClick={()=>{sendData()}}>subscribe</Button>
                  </div>
                  <div className="copy-parte__footer signika">
                      &copy; all copyrights reserved by ayman ouchedih.
                  </div>
                  <div className="img-design__footer">
                      <img src="./images/patternpad.svg" alt="pattern" />
                  </div>
           </div>
           <div className="right-side__footer center-right">
               <ul className="cont-list__socialmedia">
                   <li><a target="_blank" href="https://wwww.facebook.com"><FaFacebook /></a></li>
                   <li><a target="_blank" href="https://wwww.instagram.com"><FaInstagram /></a></li>
                   <li><a target="_blank" href="https://wwww.twitter.com"><FaTwitter /></a></li>
                   <li><a target="_blank" href="https://wwww.github.com"><FaGithub /></a></li>
               </ul>
           </div>
       </footer>)
}
function sendData() {
    //function send data to google sheets file
    var email = $("#youremail");
    if(email.val().length > 3) {
        $('#quantity').val($('#quntity-number').val());
        $.ajax({
            url:'https://api.apispreadsheets.com/data/4303/',
            type:'post',
            data:$("#myForm").serializeArray(),
            success: console.log('it good'),
            error: function(){
            alert("There was an error :(")
            }
     });
    } else {
        if(email.val().length <= 3) {
            email.css('outlineColor', 'red');
        } 
        }
    }
export default Footer;