import React ,{useEffect, useState} from 'react';
import BuyCryptonaut from './PageItems/BuyCryptonaut';
import './Home.css';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <BuyCryptonaut/>
        </div>
    );
}

export default Home;