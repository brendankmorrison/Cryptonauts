import React ,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Navigation.css';
import {RiDiscordLine, RiTwitterLine} from 'react-icons/ri';


function Navigation (props){

    return(
        <div className = 'navigation rounded'>
            <div className = "link my-auto"> 
                <a className = 'externalLink my-auto'> <RiTwitterLine size = {20}/> </a>
                <a className = 'externalLink my-auto'> <RiDiscordLine size = {20}/> </a>
            </div>
            <Link className = "link my-auto" to = '/'> HOME </Link>
            <Link className = "link my-auto" to = '/gallery'> GALLERY </Link>
            <Link className = "link my-auto" to = '/about'> ABOUT </Link>
        
        </div>
    );
}

export default Navigation;