import React ,{useEffect, useState} from 'react';
import CryptonautCard from './PageItems/CryptonautCard';
import './Gallery.css';

function Gallery (props){
    // showRandom cryptonaut state or searchAddress state
    const [image, setImage] = useState('https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV')
    const [owner, setOwner] = useState('')
    useEffect(async () => {
        handleNextImage();

    }, [])

    const handleNextImage = async () => {
        let numMinted = props.nextTokenId - 1;
        let tokenId = Math.floor((Math.random() * numMinted) + 1);
        setImage(await props.getToken(tokenId));
        setOwner(await props.getOwner(tokenId));
        console.log(image);
        console.log(owner);

    }

    return(
        <div className = 'galleryContainer'>
            <div className = 'title'> CRYPTONAUT GALLERY </div>
            <CryptonautCard image = {image}/>
            <div className = 'cardInfo'> OWNER: {owner} </div>
            <div className = 'nextImage rounded-pill' onClick = {handleNextImage}> 
            NEXT
            </div>
        </div>

    );
}

export default Gallery;