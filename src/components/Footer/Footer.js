import { Button } from "@material-ui/core";
import React from "react";
import './Footer.css';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
function Footer() {
       return(<footer className="">
           <div className="left-side__footer center-left">
                  <div className="logo-parte__footer">
                         <h1>aymanouch</h1>
                  </div>
                  <div className="form-parte__footer">
                      <form id="form">
                          <div>
                              <input type="text" placeholder="your phone or email address"/>
                          </div>
                      </form>
                      <Button color="primary"  variant="contained">subscribe</Button>
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
export default Footer;