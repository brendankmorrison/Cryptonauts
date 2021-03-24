import React ,{useEffect, useState} from 'react';
import './BuyCryptonaut.css';

function BuyCryptonaut (props){
    let id = 1;

    const handleBuyCryptonaut = async () => {
        props.mintToken();
    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyCryptonaut}> 
            MINT CRYPTONAUT #{id}/1000
        </div>
    );
}

export default BuyCryptonaut;