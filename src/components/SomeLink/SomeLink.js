import React from 'react';
import './SomeLink.css';
import jump from 'jump.js';
import {FaChevronDown} from 'react-icons/fa';
function SomeLink() {
    return(<div className="some-link">
        <button className="marvel">
           <span className="cont-span" onClick={()=>{jump("#about")}}><FaChevronDown/>get khnow me <span className="red-line"></span></span>
        </button>
    </div>);
}

export default SomeLink;