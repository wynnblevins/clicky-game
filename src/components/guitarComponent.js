import React, { Component } from 'react';

class GuitarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {hasBeenClicked: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.hasBeenClicked) {
      this.props.onDoubleClick();
    } else {
      this.setState({hasBeenClicked: true});
    }
  }
  
  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={this.props.image}/>
        <h1>{this.props.name}</h1>
      </div>  
    );
  }
}

export default GuitarComponent;