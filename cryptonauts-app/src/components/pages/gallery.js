import React ,{useEffect, useState} from 'react';
import CryptonautCard from './PageItems/CryptonautCard';
import './Gallery.css';

function Gallery (props){
    // showRandom cryptonaut state or searchAddress state
    const [state, setState] = useState('showRandom')

    useEffect(() => {


    }, [])

    return(
        <div className = 'galleryContainer'>
            <div className = 'inputContainer'>
                <input className = 'searchAddress' placeholder = 'SEARCH ADDRESS' type = 'search'/>
                <div className = 'searchButton rounded-pill'> SEARCH</div>
                
            </div>
            <CryptonautCard/>
            <div className = 'cardInfo'> OWNER: 0x72502738CA11AEC18deA56E2Ce21ab2caC875e66 </div>
            <div className = 'nextImage rounded-pill'> 
            NEXT
            </div>
        </div>

    );
}

export default Gallery;