import React, { Component } from 'react';
import GuitarComponent from './guitarComponent';

class GuitarGameBoard extends Component {
  render() {
    const { guitars } = this.props;
    const guitarsList = guitars.map(guitar => {
      console.log(guitar.name);
    })
    
    return (
      <div>
      { 
        this.props.guitars.map(function(guitar) {
          return <GuitarComponent name={guitar.name}></GuitarComponent>
        })
      }
      </div>
    );
  }
}

export default GuitarGameBoard;