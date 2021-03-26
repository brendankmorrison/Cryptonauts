import React from 'react';
import './Background.css';

function Background (props){

    return(
        <div className = 'background' onClick = {props.click}></div>
    );
}

export default Background;