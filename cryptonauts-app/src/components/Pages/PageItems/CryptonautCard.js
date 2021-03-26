import React, {useState} from 'react';
import './CryptonautCard.css'

function CryptonautCard(props){
    
    const[pic, setPic] = useState({});

    return(
        <div className = 'card'>
            <img src='https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV' alt="alternatetext"
            width = '400' height = '400' className = 'image rounded'></img>
        </div>
    );
}

export default CryptonautCard;