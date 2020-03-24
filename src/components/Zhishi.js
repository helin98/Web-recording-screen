import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@keyframes one': {
    to: {
      boxShadow: '0 0 0 5px #f51d1d94',
      opacity: 1,
      transform: 'scale(1)'
    }
  },
  root: {
    position: 'absolute',
    right: 20,
    top: 20,

    boxSizing: 'border-box',
    width: '22px',
    height: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '2px solid red',
    boxShadow: '0 red',
    transform: 'scale(0.85)',
    animation: '$one 1s linear infinite alternate'
  },
  label: {
    boxSizing: 'border-box',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#f00'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.label} />
    </div>
  );
};
