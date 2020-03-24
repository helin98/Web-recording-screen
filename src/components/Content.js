import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Zhishi from './Zhishi';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    height: 500,
    position: 'relative',
    background: '#eee',
    backgroundClip: 'content-box'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    background: '#eee'
  }
}));

const styles = theme => ({
  root: {
    marginTop: 90
  }
});

const Support = withStyles(styles)(({ classes }) => {
  return (
    <Typography variant='h5' align='center' color='textSecondary' className={classes.root}>
      浏览器不支持此功能
    </Typography>
  );
});

export const Video = React.forwardRef(({ can, ...props }, ref) => {
  const classes = useStyles();
  console.log(props, can);
  return (
    <Paper className={classes.paper} id='box'>
      {can ? (
        <video
          className={classes.video}
          ref={ref}
          {...props}
          style={{ display: props.autoPlay ? 'block' : 'none' }}
        />
      ) : (
        <Support />
      )}

      {props.autoPlay && <Zhishi />}
    </Paper>
  );
});
