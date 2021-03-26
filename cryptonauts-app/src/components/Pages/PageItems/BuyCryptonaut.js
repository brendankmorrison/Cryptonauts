import React from 'react';
import './BuyCryptonaut.css';

function BuyCryptonaut (props){
    const handleBuyCryptonaut = async () => {
        props.mintToken();
    }

    function handleEndSale(){
        if(props.nextTokenId < 1001){
            return  'MINT CRYPTONAUT #' + props.nextTokenId.toString() + '/1000';
        }else{ 
            return 'SALE IS OVER';
        }
    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyCryptonaut}> 
            {handleEndSale()}
        </div>
    );
}

export default BuyCryptonaut;