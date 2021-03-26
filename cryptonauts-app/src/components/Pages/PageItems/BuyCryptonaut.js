import React from 'react';
import './BuyCryptonaut.css';

function BuyCryptonaut (props){
    const handleBuyCryptonaut = async () => {
        props.mintToken();
    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyCryptonaut}> 
            MINT CRYPTONAUT #{props.nextTokenId}/1000
        </div>
    );
}

export default BuyCryptonaut;