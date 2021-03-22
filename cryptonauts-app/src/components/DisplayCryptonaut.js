import React ,{useEffect, useState} from 'react';

function DisplayCryptonaut(props){
    
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
        <div>
            <img src='https://gateway.pinata.cloud/ipfs/QmfUShAbxfXecoxySb9JiMH1Lb8URUw2Cse9Usj5vZmeej' alt="alternatetext"
            width = '200' height = '300' className = 'rounded'></img>
        </div>
    );
}

export default DisplayCryptonaut;