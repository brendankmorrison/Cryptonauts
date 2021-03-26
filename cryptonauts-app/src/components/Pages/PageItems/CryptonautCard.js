import React from 'react';
import './CryptonautCard.css'

function CryptonautCard(props){

    return(
        <div className = 'card'>
            <img src= {props.image} alt="alternatetext"
            width = '400' height = '400' className = 'image rounded'></img>
        </div>
    );
}

export default CryptonautCard;