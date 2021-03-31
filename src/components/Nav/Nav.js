import React, {useState, useRef} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link, useHistory } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { makeStyles, Grid, IconButton, Backdrop } from '@material-ui/core';
import {useSpring, animated} from 'react-spring'

import HomeIcon from '@material-ui/icons/Home';

export const useStyles = makeStyles(theme => ({
    Nav: {
        position: 'fixed',
        // overflow: 'hidden',
        zIndex : 1,
        
    },
    NavBar: {
        backgroundColor:'rgba(255, 255, 255, 0.8)',  
    },
    NavButton: {
        margin: '0em 1em 0em 0em',
        float: 'right',
        
    },
    icon:{
      color: '#112F41',
    },
}));

const NavBar = () => {
  const classes = useStyles();

    return(
    <Grid container directon='column' justify='flex-end' alignItems='flex-end' className={classes.Nav}>
        
        <Grid item xs={12} className={classes.NavBar}>
            <IconButton className={classes.NavButton}>
                <NavHashLink smooth to='/#Home'><HomeIcon className={classes.icon}/></NavHashLink>
            </IconButton>
        </Grid>
    
    </Grid>

  );

}

export default NavBar;