import React from 'react';
import Letter from './../../components/Letter/Letter.js';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    welcome:{
        height: '100vh',
    },
    welcome_title: {
      marginLeft: 40,
      display: 'block',
      textAlign: 'left',
      paddingTop: '10%',
      lineHeight: '70%',
    },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
      <div className = {classes.welcome} id='Welcome'>
        <h1 className={classes.welcome_title}>
          <Letter style={{fontSize: 200,}} value="F"/>
          <Letter style={{fontSize: 200,}}value="R"/>
          <Letter style={{fontSize: 200,}} value="A"/>
          <Letter style={{fontSize: 200,}}value="N"/>
          <Letter style={{fontSize: 200,}} value="K"/>
          <br/>
          <Letter style={{fontSize: 200,}} value="W"/>
          <Letter style={{fontSize: 200,}} value="E"/>
          <Letter style={{fontSize: 200,}} value="I"/>
        </h1>
      </div>
    );

}

export default Welcome;
