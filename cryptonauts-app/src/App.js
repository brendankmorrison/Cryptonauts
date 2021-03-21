import React ,{useEffect, useState} from 'react';
import Web3 from 'web3';
import Navbar from './components/navbar'

function App() {
  const[Currentaccount, setCurrentaccount] = useState("connect eth account.");
  const[Currentnetwork, setCurrentnetwork] = useState(0);
  //const ethereumButton = document.querySelector('.enableEthereumButton');

  useEffect(() => {
  const ethereumButton = document.querySelector('.enableEthereumButton');

  // initialize web3 on mount
  loadWeb3();


  // connect metamask if button clicked
  //ethereumButton.addEventListener('click', () => {
    //loadBlockchainData();
  //});

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


    // set current account to account[0] if unlocked in
    //const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    if (account){
      setCurrentaccount(account);
    }else{
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


  return (
    <div className = 'App'>
      {/* Display Navbar */}
      <Navbar account = {Currentaccount}/>

      {/* Depending on page display Buy, Gallery, or About page */}


    </div>

  );
}

export default App;
