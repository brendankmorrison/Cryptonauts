import React ,{useEffect, useState} from 'react';
import './CryptonautCard.css'

function CryptonautCard(props){
    
    const[pic, setPic] = useState({});

    /*fetch('https://gateway.pinata.cloud/ipfs/QmfUShAbxfXecoxySb9JiMH1Lb8URUw2Cse9Usj5vZmeej')
        .then((response) => response.json())
        .then((data) => {
                console.log( JSON.parse(data) )
                setPic(JSON.parse(data))
            }
        )
    */

    return(
        <div className = 'card'>
            <img src='https://gateway.pinata.cloud/ipfs/QmfUShAbxfXecoxySb9JiMH1Lb8URUw2Cse9Usj5vZmeej' alt="alternatetext"
            width = '400' height = '400' className = 'image rounded'></img>
        </div>
    );
}

export default CryptonautCard;