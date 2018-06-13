import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuitarGameBoard from './components/guitarGameBoard';

class App extends Component {
  render() {
    let guitars = [
      { name: 'Stratocaster', image: '../images/stratocaster_rsz.png' }, 
      { name: 'SG', image: '../images/sg_rsz.png' },
      { name: 'Les Paul', image: '../images/lesPaul_rsz.png' },
      { name: 'ES-335', image: '../images/es335_rsz.png' },
      { name: 'Explorer', image: '../images/explorer_rsz.png' },
      { name: 'Flying V', image: '../images/flyingv_rsz.png' },
      { name: 'Ovation', image: '../images/ovation_rsz.png' },
      { name: 'Martin D', image: '../images/martind_rsz.png' },
      { name: 'Taylor', image: '../images/taylor_rsz.png' },
      { name: 'Telecaster', image: '../images/tele_rsz.png' },
      { name: 'Warlock', image: '../images/warlock_rsz.png' },
      { name: 'PRS', image: '../images/prs_rsz.png' },
      { name: 'js2410', image: '../images/js2410_rsz.png' },
      { name: 'jemjr', image: '../images/jemjr_rsz.png' },
      { name: 'Jackson V', image: '../images/jacksonv_rsz.png' },
      { name: 'g5420', image: '../images/g5420_rsz.png' }
    ];
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GuitarGameBoard guitars={guitars}></GuitarGameBoard>
      </div>
    );
  }
}

export default App;
