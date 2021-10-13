import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import image1 from './soundbyte_cover.jpg';
import image2 from './soundbyte_hearingbrain.jpg';
import image3 from './soundbyte_interview.jpg';
import image4 from './soundbyte_prototype.jpg';

import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
  header:{
    color: 'white',
    marginLeft: '0.5em',
    fontStyle: 'italic',
    fontSize: '0.9em',
    lineHeight: '0.2em',
    opacity: 0.8,
  },
  infoContainer: {
   overflow: 'hidden',
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

 /*
  <paper>

    {item: 'image', component: (<figure>     </figure>)}   alt, src, caption?
    {item:'text', component: (<p>      </p>)}  child

 </paper>
 */

const PortfolioInfo = (props) =>{
  const classes = useStyles();
return(
    <Grid xs ={10} id={props.id} container direction='column' justify='space-around' className={classes.infoContainer}>
    <p className={classes.header}>click anywhere to close</p>
      <Paper className={classes.paper}>
        {props.children}
      </Paper>
  </Grid>
)
}

export default PortfolioInfo;
