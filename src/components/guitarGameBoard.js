import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GuitarComponent from './guitarComponent';

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

function onGuitarDoubleClick() {
  alert('Ey yo dawg, i heard you like clicking things, but you just gotta click the shiz once.');
}

function GuitarGameBoard(props) {
  const { guitars } = props;

  return (
    <div>
      <Typography variant="subheading" gutterBottom>
        
      </Typography>
      <Grid container spacing={16}>
        {guitars.map((guitar, i) => (
          <Grid key={i} item xs={3}>
            <GuitarComponent name={guitar.name} 
              image={guitar.image} onDoubleClick={onGuitarDoubleClick}>
            </GuitarComponent>
          </Grid>
        ))}
        
      </Grid>
      <Typography variant="subheading" gutterBottom>
        CSS Grid Layout:
      </Typography>
    </div>
  );
}

GuitarGameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuitarGameBoard);