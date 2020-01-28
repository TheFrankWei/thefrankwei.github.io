import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';


export const useStyles = makeStyles(theme => ({
    container:{

    },
}));


const Home = () => {
    const classes = useStyles();
    return (
      <div className={classes.container}>

        <Welcome/>
        <About/>
        <Portfolio/>
        <Contact/>

      </div>
    );
};

export default Home;
