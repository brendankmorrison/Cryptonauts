import React ,{useEffect, useState} from 'react';
import BuyCryptonaut from './PageItems/BuyCryptonaut';
import './Home.css';
import Web3 from 'web3';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <BuyCryptonaut mintToken = {props.mintToken}/>
        </div>
    );
}

export default Home;