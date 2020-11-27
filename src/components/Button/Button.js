import React from 'react';
import './button.css';
function Button(props) {

    return(
        <button className="btn btn-downlod marvel">
            {props.content}
        </button>
    );
}
export default Button;