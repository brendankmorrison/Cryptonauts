import React ,{useEffect, useState} from 'react';
import './BuyCryptonaut.css';

function BuyCryptonaut (props){

    const handleBuyCryptonaut = () => {
        console.log('he bought');

    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyCryptonaut}> 
            BUY CRYPTONAUT
        </div>
    );
}

export default BuyCryptonaut;