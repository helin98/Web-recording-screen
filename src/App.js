import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Start from './components/Start';
import Stop from './components/Stop';
import Down from './components/Down';
import { Video } from './components/Content';
import { asystart, asystop } from './reducers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10
  }
}));

const App = props => {
  const classes = useStyles();
  const ref = useRef(null);
  const { toggle, asystart, asystop, url } = props;
  const [can, setCan] = useState(true);

  useEffect(() => {
    const ok = !!navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia;
    setCan(ok);
  }, []);

  return (
    <>
      <Container maxWidth='md'>
        <Grid container spacing={1} className={classes.root}>
          <Grid item xs={4}>
            <Start disabled={toggle} onClick={can ? _ => asystart(ref) : null} />
          </Grid>
          <Grid item xs={4}>
            <Stop onClick={_ => asystop(toggle)} />
          </Grid>
          <Grid item xs={4}>
            <Link
              href={url ? url : null}
              download={url ? `${Date.now()}.mp4` : null}
              color='inherit'
              underline='none'
            >
              <Down disabled={!url} />
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Video ref={ref} autoPlay={toggle} controls={!toggle} can={can} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default connect(
  state => state,
  { asystart, asystop }
)(App);
