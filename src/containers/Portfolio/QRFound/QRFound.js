import React from 'react';
import { makeStyles, Grid,} from '@material-ui/core';
import image1 from './qrfound_login.png';
import image2 from './qrfound_main.png';
import image3 from './qrfound_sharding.png';
import image4 from './qrfound_update.png';

import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
  wrapper:{
    overflow: 'hidden',
  },
  header:{
    color: 'white',
    marginLeft: '0.5em',
    fontStyle: 'italic',
    fontSize: '0.9em',
    lineHeight: '0.2em',
    opacity: 0.8,
    fontFamily: `'Noto Sans', sans-serif`,
  },
  infoContainer: {
    textAlign: 'justify',
    [theme.breakpoints.up('md')]: {
       fontSize: '1em',
       margin: '0.8em auto',
     },
     [theme.breakpoints.down('md')]: {
       fontSize: '0.7em',
       margin: '0.8em auto 0.8em auto',
     },
   },
  paper:{
    textAlign: 'center',
    padding: '2em 3em 2em 3em',
    boxSizing: 'border-box',
  },
  imageContainer:{
    textAlign: 'center',
  },
  image1:{
    height: 'auto',
    width: '50%',
  },
  image2:{
    height: 'auto',
    width: '50%',
  },
 }));

const QRFound = () =>{
  const classes = useStyles();

return(
  <div id = 'QRFound' className={classes.wrapper}>
    <Grid xs ={10}  container direction='column' justify='space-around' className={classes.infoContainer}>
    <p className={classes.header}>click anywhere to close</p>
      <Paper className={classes.paper}>
        <Grid item>
          <h1>QRFound</h1>
          <p>Webapp allowing users to put QR codes on their devices in order to keep track and locate them if lost</p>
        </Grid>
        <Grid item>
          <h2>Project Preview</h2>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image1} src = {image1} alt = "" ></img>
            <figcaption><i>Main Page</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image1} src = {image2} alt = "" ></img>
            <figcaption><i>Page displaying user's item, along with the QR code generated -- found items with a QR Code can be scanned, displaying a e-mail form in order for the owner to be contacted</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image2} src = {image3} alt = "" ></img>
            <figcaption><i>{'PostgreSQL Schema for user sharding -- based off of Instagram\'s sharding mechanism'}</i></figcaption>
          </figure>
        </Grid>
        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image2} src = {image4} alt = "" ></img>
            <figcaption><i>{'Page allowing user to add their items -- User details are also displayed, showing a salted and hashed password'}</i></figcaption>
          </figure>
        </Grid>
        </Paper>
      </Grid>
    

  </div>
)
}

export default QRFound;
