import React ,{useEffect, useState} from 'react';
import Web3 from 'web3';

function App() {

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, [])

  const loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected.'
      );
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;

    const accounts = web3.eth.getAccounts();
    const account = accounts[0];

    const networkId = await web3.eth.net.getId();
  }

  return (
    <div className = 'container'>
      <h1>Cryptonauts </h1>
    </div>

    );
}

export default App;
