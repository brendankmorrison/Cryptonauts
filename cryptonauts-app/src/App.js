import React ,{useEffect, useState} from 'react';
import Web3 from 'web3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Background from './components/Background';
import {useTransition, animated} from 'react-spring'

function App() {
  const[Currentaccount, setCurrentaccount] = useState("connect eth account.");
  const[Currentnetwork, setCurrentnetwork] = useState(0);
  const[navIsOpen, toggleNav] = useState(false);
  const[homeIsOpen, toggleHomeState] = useState(true);
  const[galleryIsOpen, toggleGalleryState] = useState(false);
  const[aboutIsOpen, toggleAboutState] = useState(false);

  useEffect(() => {
  const ethereumButton = document.querySelector('.enableEthereumButton');

  // initialize web3 on mount
  loadWeb3();

  // load blockchain data if metamask wallet is detected
  if (window.web3){
    loadBlockchainData();
    // reload blockchainData on metamask accountsChanged event
    window.ethereum.on('accountsChanged', function (accounts) {
      loadBlockchainData();
    });

    // reload blockchainData on metamask networkChanged event
    window.ethereum.on('networkChanged', function (accounts) {
      loadBlockchainData();
    });
  }
  }, [])


  // detect ethereum browser 
  const loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'no ethereum wallet detected.'
      );
    }
  };

  // load ethereum accounts, network, and smart contracts 
  const loadBlockchainData = async () => {
    // initialize web3
    const web3 = window.web3;

    // fetch user eth account
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    // set current account to account[0] if unlocked
    if (account){
      setCurrentaccount(account);
    }
    // otherwise prompt to connect wallet
    else{
      setCurrentaccount('connect eth account.');
    }

    // get networkId, display error if networkId != 1 (ethereum mainnet)
    const networkId = await web3.eth.net.getId();
    if(networkId != 1){
      setCurrentaccount('sowy wrong network');
      setCurrentnetwork(networkId);
    }
    // get smart contracts
  }
  

  const toggleNavHandler = () => {
    toggleNav(!navIsOpen);
  }

  const closeNav = () => {
    toggleNav(false);
  }

  const displayBackground = () => {
    if (navIsOpen){
      return(<Background click = {closeNav}/>)
    }
  }

  const displayNavigation = () => {
    if (navIsOpen){
      return(<Navigation/>)
    }
  }

  const navTransition = useTransition(navIsOpen, null, {
    from: { position: 'absolute', opacity: 0 , transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  })

  return (
    <div className = 'App'>
      {/* Display Navbar */}
      <Router>
        <Navbar account = {Currentaccount} click = {toggleNavHandler} navIsOpen = {navIsOpen}/>
        
        {/* display background and navigation if navIsOpen is true */}
        {displayBackground()}

        {/*displayNavigation()*/}
        {console.log(navIsOpen)}
        {navTransition.map(({ item, key, props }) => item && 
        <animated.div key={key} style={props} className = 'animation'> 
          <Background click = {closeNav}/>
          <Navigation/> 
        </animated.div>)}       

        {/* Depending on url display Home, Gallery, or About page */}
        {console.log(homeIsOpen, galleryIsOpen, aboutIsOpen)}
        <Switch>
          <Route exact path= "/">
            <Home onClick = {closeNav}/>
          </Route>
          <Route path="/gallery">
            <Gallery onClick = {closeNav}/>
          </Route>
          <Route path="/about">
            <About onClick = {closeNav}/>
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
