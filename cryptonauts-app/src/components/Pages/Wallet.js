import React ,{useEffect, useState} from 'react';
import CryptonautCard from './PageItems/CryptonautCard';
import './Wallet.css';

function Wallet (props){
    const [image, setImage] = useState('https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV')

    useEffect(() => {

    }, [])

    const handleSearch = () => {
        let address = document.getElementById('userInput').value;
        document.getElementById("userInput").value = '';
        props.searchAddress(address);
    }

    return(
        <div className = 'walletContainer'>
            <div className = 'inputContainer'>
                <input id = 'userInput' className = 'searchAddress' placeholder = 'SEARCH ADDRESS' type = 'search'/>
                <div className = 'searchButton rounded-pill' onClick = {handleSearch}> SEARCH</div>
                
            </div>
            <CryptonautCard image = {image}/>
        </div>

    );
}

export default Wallet;