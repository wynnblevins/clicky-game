import React, { Component } from 'react';

class GuitarComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image}/>
        <h1>{this.props.name}</h1>
      </div>  
    );
  }
}

export default GuitarComponent;