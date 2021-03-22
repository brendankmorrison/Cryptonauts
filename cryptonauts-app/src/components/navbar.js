import React ,{useEffect, useState} from 'react';
import {
    Link
} from "react-router-dom";

function Navbar (props){

    function substringAddress () {
        // if address variable is an address, substring to save space
        if (props.account.length > 40){
            return(props.account.substring(0, 5) + "..." + props.account.substring(36, 42))
        }
        // otherwise display 'wrong address' or 'connect eth wallet'
        else{
            return(props.account)
        }
    }

    // change inline style
    return(
        <nav className = 'navbar navbar-dark bg-dark shadow mb-5'>
            {/* display navbar links */}
            <p className = "navbar-Brand my-auto"><Link to = '/' style={{ color: '#FFF' }}> cryptonauts. </Link></p>
            <a><Link to = '/' style={{ color: '#000' }}> home </Link></a>
            <a><Link to = '/gallery' style={{ color: '#000' }}> gallery </Link></a>
            <a><Link to = '/about' style={{ color: '#000' }}> about </Link></a>

            {/* display user address */}
            <ul className = "navbar-nav">
                {/*<button class="enableEthereumButton">Enable Ethereum</button>*/}
                <li className = "nav-item text-white"> {substringAddress()} </li>
            </ul>
      </nav>
    );
}

export default Navbar;