import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import image1 from './qrfound_login.png';
import image2 from './qrfound_main.png';
import image3 from './qrfound_sharding.png';
import image4 from './qrfound_update.png';

import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
  infoContainer: {
   textAlign: 'center',
   padding:'5em 0em 5em 0em',
   margin: '0 auto 0 auto',
   fontSize: '1em',
  }
 }));

const QRFound = () =>{
  const classes = useStyles();

return(
  <div id = 'QRFound' className={classes.wrapper}>
    
    <Grid xs ={10}  container direction='column' justify='space-around' className={classes.infoContainer}>
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
            <img className={classes.image} src = {image1} alt = "" ></img>
            <figcaption><i>Main Page</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image2} alt = "" ></img>
            <figcaption><i>Page displaying user's item, along with the QR code generated -- found items with a QR Code can be scanned, displaying a e-mail form in order for the owner to be contacted</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image3} alt = "" ></img>
            <figcaption><i>{'PostgreSQL Schema for user sharding -- based off of Instagram\'s sharding mechanism'}</i></figcaption>
          </figure>
        </Grid>
        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image4} alt = "" ></img>
            <figcaption><i>{'Page allowing user to add their items -- User details are also displayed, showing a salted and hashed password'}</i></figcaption>
          </figure>
        </Grid>
        </Paper>
      </Grid>
    

  </div>
)
}

export default QRFound;
