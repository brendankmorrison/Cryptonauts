import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css';
import {RiDiscordLine, RiTwitterLine} from 'react-icons/ri';


function Navigation (props){

    return(
        <div className = 'navigation rounded'>
            <div className = "externalLinkWrapper my-auto"> 
                <a className = 'externalLink my-auto' href = 'https://twitter.com/CryptonautsNFT' target="_blank"> <RiTwitterLine size = {20}/> </a>
                <a className = 'externalLink my-auto' href = 'https://discord.gg/pJxyuzB5wc' target = "_blank"> <RiDiscordLine size = {20}/> </a>
            </div>
            <Link className = "link my-auto rounded" to = '/'> HOME </Link>
            <Link className = "link my-auto rounded" to = '/gallery'> GALLERY </Link>
            <Link className = "link my-auto rounded" to = '/wallet'> WALLET </Link>
            <Link className = "link my-auto rounded" to = '/about'> ABOUT </Link>
        
        </div>
    );
}

export default Navigation;