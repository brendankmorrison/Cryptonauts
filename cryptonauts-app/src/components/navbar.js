import React ,{useEffect, useState} from 'react';
import Button from './Button';
import {
    Link
} from "react-router-dom";

function Navbar (props){

    // displays address substring to save space
    function substringAddress () {
        if (props.account.length > 40){
            return(props.account.substring(0, 5) + "..." + props.account.substring(36, 42))
        }
        else{
            return(props.account)
        }
    }

    return(
        <nav className = 'navbar navbar-dark bg-dark shadow mb-5'>
            <p className = "navbar-Brand my-auto text-white"><Link to = '/'> Cryptonauts </Link></p>
                <button><Link to = '/'> Home </Link></button>
                <button><Link to = '/gallery'> Gallery </Link></button>
                <button><Link to = '/about'> About </Link></button>
            <ul className = "navbar-nav">
                {/*<button class="enableEthereumButton">Enable Ethereum</button>*/}
                <li className = "nav-item text-white"> {substringAddress()} </li>
            </ul>
      </nav>
    );
}

export default Navbar;