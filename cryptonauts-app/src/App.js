import React ,{useEffect, useState} from 'react';
import Web3 from 'web3';

function App() {
  const[Currentaccount, setCurrentaccount] = useState("no ethereum account detected.");

  useEffect(() => {
  // initialize web3 and blockchain data on mount
  loadWeb3();
  loadBlockchainData();

  // reload blockchain data on accountChanged event
  window.ethereum.on('accountsChanged', function (accounts) {
    loadBlockchainData();
  });
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
        'Non-Ethereum browser detected.'
      );
    }
  };

  // load ethereum accounts, network, and smart contracts 
  const loadBlockchainData = async () => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    console.log(Currentaccount);

    const networkId = await web3.eth.net.getId();
  }


  return (
    <div>

      <nav className = 'navbar navbar-dark bg-dark shadow mb-5'>
      <p className = "navbar-Brand my-auto text-white"> Cryptonauts </p>
      <ul className = "navbar-nav">
        <li className = "nav-item text-white"> {Currentaccount} </li>
      </ul>
      </nav>
    </div>

  );
}

export default App;
