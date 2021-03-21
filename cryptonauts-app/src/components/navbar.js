import React ,{useEffect, useState} from 'react';
import Button from './Button';

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
            <p className = "navbar-Brand my-auto text-white"> Cryptonauts </p>
            <button> Buy </button>
            <button> Gallery </button>
            <button> About </button>
            <ul className = "navbar-nav">
                {/*<button class="enableEthereumButton">Enable Ethereum</button>*/}
                <li className = "nav-item text-white"> {substringAddress()} </li>
            </ul>
      </nav>
    );
}

export default Navbar;