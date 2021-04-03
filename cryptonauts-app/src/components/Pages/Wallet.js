import React ,{useEffect, useState} from 'react';
import CryptonautCard from './PageItems/CryptonautCard';
import './Wallet.css';

function Wallet (props){
    const [images, setImages] = useState([]);

    useEffect(async () => {
        setImages(await handleSearch());
    }, [])

    const handleSearch = async () => {
        let tokenList = await props.searchAddress();
        let tokenImages= []; 
        if(tokenList.length == 0){
            // set token images to no cryptonauts image
            alert('no cwyptonauts');
        }
        else {
            for(let token = 0; token < tokenList.length; token ++){
                tokenImages.push('https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV');
            }
        }   
        return tokenImages;
    }

    return(
        <div className = 'walletContainer'>
            <div className = 'title'> YOUR CRYPTONAUTS </div>

            {/*displayCryptonauts()*/}
            <div className = 'cards'>
                {images.map(image => <CryptonautCard image = {image}/>)}
            </div>
        </div>

    );
}

export default Wallet;