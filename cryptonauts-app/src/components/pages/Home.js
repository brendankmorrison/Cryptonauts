import React from 'react';
import BuyCryptonaut from './PageItems/BuyCryptonaut';
import './Home.css';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <BuyCryptonaut mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
        </div>
    );
}

export default Home;