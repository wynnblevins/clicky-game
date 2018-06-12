import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuitarGameBoard from './components/guitarGameBoard';

class App extends Component {
  render() {
    let guitars = [
      { name: 'Stratocaster' }, 
      { name: 'SG' },
      { name: 'Les Paul' },
      { name: 'ES-335' },
      { name: 'Explorer' },
      { name: 'Flying V' },
      { name: 'Ovation' },
      { name: 'Martin D' },
      { name: 'Taylor' },
      { name: 'Telecaster' },
      { name: 'Warlock' },
      { name: 'PRS' },
      { name: 'js2410' },
      { name: 'jemjr' },
      { name: 'Jackson V' },
      { name: 'g5420' }
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
