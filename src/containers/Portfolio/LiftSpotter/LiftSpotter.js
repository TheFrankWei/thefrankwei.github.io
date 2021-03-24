import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
// import './LiftSpotter.scss';
import image1 from './liftspotter_login.png';
import image2 from './liftspotter_addroutine.png';
import image3 from './liftspotter_addworkout.png';
import image4 from './liftspotter_account.png';
import image5 from './liftspotter_community.png';

import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
 infoContainer: {
  textAlign: 'center',
  padding:'5em 0em 5em 0em',
  margin: '0 auto 0 auto',
  fontSize: '1em',
 }
}));


const LiftSpotter = () =>{
  const classes = useStyles();

return(
  <div id = 'LiftSpotter'>
    <Grid xs={8} container direction='column' className={classes.infoContainer}>
      <Paper>

        <Grid item>
        <h1>LiftSpotter</h1>
        <p>Webapp allowing users to create workout routines and share them with the community</p>
        </Grid>

        <Grid item>
          <h2>Project Preview</h2>
        </Grid>

        <Grid item>
          <figure>
            <img src = {image1} alt = "" ></img>
            <figcaption><i>Login Page</i></figcaption>
          </figure>
        </Grid>

        <Grid item>
          <figure>
            <img src = {image2} alt = "" ></img>
            <figcaption><i> Page to add routines</i></figcaption>
          </figure>
        </Grid>
        
        <Grid item>
          <figure>
            <img src = {image3} alt = "" ></img>
            <figcaption><i>Page to add workouts to one's routine</i></figcaption>
          </figure>
        </Grid>

        <Grid item>
          <figure>
            <img src = {image4} alt = "" ></img>
            <figcaption><i>Users can choose whether or not to share their routine with other users</i></figcaption>
          </figure>
        </Grid>

        <Grid item>
          <figure>
            <img src = {image5} alt = "" ></img>
            <figcaption><i> Users can view others' routines on the community page</i></figcaption>
          </figure>
        </Grid>

        </Paper>
      </Grid>
      
  </div>
)
}

export default LiftSpotter;
