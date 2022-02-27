import React from 'react';
import './Button.css';

function Button({disabled, buttonText}){
    return (
<>
    <button type="button" onClick={() => console.log("button pressed")} disabled={disabled}>{buttonText}</button>
</>
    )
}

export default Button;
