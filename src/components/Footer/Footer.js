import { Button } from "@material-ui/core";
import React from "react";
import './Footer.css';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import $ from "jquery";
function Footer() {
       return(<footer className="">
           <div className="left-side__footer center-left">
                  <div className="logo-parte__footer">
                         <h1>aymanouch</h1>
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
               <ul>
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