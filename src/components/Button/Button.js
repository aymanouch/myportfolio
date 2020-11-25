import React from 'react';
import './button.css';
function Button(props) {
    const btnStyle = {
        background:props.info.bg
    }
    return(
        <button style={btnStyle} className="btn btn-downlod marvel">
            {props.content}
        </button>
    );
}
export default Button;