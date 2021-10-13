import React from 'react';
import { makeStyles, Grid, } from '@material-ui/core';
import image1 from './liftspotter_login.png';
import image2 from './liftspotter_addroutine.png';
import image3 from './liftspotter_addworkout.png';
import image4 from './liftspotter_account.png';
import image5 from './liftspotter_community.png';
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
    padding: '2em 3em 2em 3em',
    boxSizing: 'border-box',
  },
  imageContainer:{
    textAlign: 'center',
  },
  image:{
    height: 'auto',
    width: '100%',
  },
 }));


const LiftSpotter = () =>{
  const classes = useStyles();

return(
  <div id = 'LiftSpotter' className={classes.wrapper}>
    
    <Grid xs ={10}  container direction='column' justify='space-around' className={classes.infoContainer}>

      <p className={classes.header}>click anywhere to close</p>
      <Paper className={classes.paper}>
        <Grid item className={classes.imageContainer}>
        <h1>LiftSpotter</h1>
        <p>Webapp allowing users to create workout routines and share them with the community</p>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <h2>Project Preview</h2>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image1} alt = "" ></img>
            <figcaption><i>Login Page</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image2} alt = "" ></img>
            <figcaption><i> Page to add routines</i></figcaption>
          </figure>
        </Grid>
        
        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image3} alt = "" ></img>
            <figcaption><i>Page to add workouts to one's routine</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image4} alt = "" ></img>
            <figcaption><i>Users can choose whether or not to share their routine with other users</i></figcaption>
          </figure>
        </Grid>

        <Grid item className={classes.imageContainer}>
          <figure>
            <img className={classes.image} src = {image5} alt = "" ></img>
            <figcaption><i> Users can view others' routines on the community page</i></figcaption>
          </figure>
        </Grid>

        </Paper>
      </Grid>
      
  </div>
)
}

export default LiftSpotter;
