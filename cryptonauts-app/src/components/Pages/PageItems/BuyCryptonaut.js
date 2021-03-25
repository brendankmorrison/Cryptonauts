import React ,{useEffect, useState} from 'react';
import './BuyCryptonaut.css';

function BuyCryptonaut (props){
    const handleBuyCryptonaut = async () => {
        props.mintToken();
    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyCryptonaut}> 
            MINT CRYPTONAUT #/1000
        </div>
    );
}

export default BuyCryptonaut;