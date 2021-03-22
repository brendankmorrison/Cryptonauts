import React ,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import './Navbar.css'

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

    return(
        <nav className = 'navbar navbar-dark bg-dark shadow rounded'>
            {/* display navbar links */}
            <Link className = "navbar-Brand my-auto text-white" to = '/'> CRYPTONAUTS </Link>

            <p className = 'spacer'/>
            {/* display user address */}
            <p className = "address my-auto"> {substringAddress()} </p>

            {/* nav icon */}
            <p className = "nav-icon my-auto" onClick = {props.click}><GiHamburgerMenu/></p>
      </nav>
    );
}

export default Navbar;