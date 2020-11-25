import React from 'react';
import './SomeLink.css';
import {FaChevronDown} from 'react-icons/fa';
function SomeLink() {
    return(<div className="some-link">
        <button className="marvel">
           <span className="cont-span"><FaChevronDown/>get khnow me <span className="red-line"></span></span>
        </button>
    </div>);
}

export default SomeLink;