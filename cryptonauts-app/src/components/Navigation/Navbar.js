import React from 'react';
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import './Navbar.css'
import {useTransition, animated} from 'react-spring'

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

    const transitions = useTransition(!props.navIsOpen, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })


    return(
        <nav className = 'navbar navbar-dark bg-dark shadow rounded'>
            {/* display navbar links */}
            <Link className = "navbar-Brand my-auto text-white" to = '/'> CRYPTONAUTS </Link>

            <p className = 'spacer'/>
            {/* display user address */}
            <p className = "address my-auto"> {substringAddress()} </p>

            {/* nav icon */}
            <div onClick = {props.click} className = 'nav-icon my-auto'>{transitions.map(({ item, key, props }) => 
            item
            ? <animated.div style={props}> <GiHamburgerMenu/> </animated.div>
            : <animated.div style={props}> <AiOutlineClose/> </animated.div>
            )}</div>
        </nav>
    );
}

export default Navbar;