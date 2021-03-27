import React ,{useEffect, useState} from 'react';
import CryptonautCard from './PageItems/CryptonautCard';
import './Gallery.css';

function Gallery (props){
    // showRandom cryptonaut state or searchAddress state
    const [image, setImage] = useState('https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV')

    useEffect(() => {
        handleNextImage();

    }, [])

    const handleNextImage = async () => {
        let token = await props.getRandomToken();
        console.log(token);

    }

    return(
        <div className = 'galleryContainer'>
            <CryptonautCard image = {image}/>
            <div className = 'cardInfo'> OWNER: 0x72502738CA11AEC18deA56E2Ce21ab2caC875e66 </div>
            <div className = 'nextImage rounded-pill' onClick = {handleNextImage}> 
            NEXT
            </div>
        </div>

    );
}

export default Gallery;