import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GuitarComponent from './guitarComponent';
import GameOverModal from './gameOverModal';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});


class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guitars: this.props.guitars,
      show: false   
    }
  }

  shuffle() {
    let j, x, i;
    let newGuitarsArr = this.state.guitars;
    for (i = newGuitarsArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = newGuitarsArr[i];
        newGuitarsArr[i] = newGuitarsArr[j];
        newGuitarsArr[j] = x;
    }

    this.setState({guitars: newGuitarsArr});
  }  

  handleClick = (guitarName) => {
    console.log(guitarName);
    
    this.state.guitars.map((guitar) => {
      if (guitarName === guitar.name) {
        // if it has already been clicked => game over
        if (guitar.hasBeenClicked) {
          this.onGuitarDoubleClick();
        }
        else { // if it does set has been clicked to true
          guitar.hasBeenClicked = true;
          
        }
      }
    });
    this.shuffle();
    
    console.log(this.props.guitars);
  }

  showModal = () => {
    console.log('inside show modal');
    this.setState({ show: true });
  };

  hideModal = () => {
    console.log('inside close modal');
    this.setState({ show: false });
  };

  onGuitarDoubleClick = () => {
    this.showModal();
  }
  
  render() {
    return (
      <div>
        <Typography variant="subheading" gutterBottom>
          
        </Typography>
        <Grid container spacing={16}>
          {this.props.guitars.map((guitar, i) => (
            <Grid key={i} item xs={3}>
              <GuitarComponent name={guitar.name} 
                image={guitar.image} onDoubleClick={this.onGuitarDoubleClick}
                handleClick={this.handleClick}
                onGuitarClick={this.guitarWasClicked}>
              </GuitarComponent>
            </Grid>
          ))}
          
        </Grid>
        <GameOverModal show={this.state.show} handleClose={this.hideModal}>
          <h1>You Lose!</h1>
        </GameOverModal>
        <Typography variant="subheading" gutterBottom>
          CSS Grid Layout:
        </Typography>
      </div>  
    );
  }
}

GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameBoard);