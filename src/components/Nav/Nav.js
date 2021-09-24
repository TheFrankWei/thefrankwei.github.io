import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { makeStyles, Grid, IconButton,} from '@material-ui/core';

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
            <IconButton className={classes.NavButton} aria-label='home-button'>
                <NavHashLink smooth to='/#Home' aria-label='link-to-home'><HomeIcon className={classes.icon}/></NavHashLink>
            </IconButton>
        </Grid>
    
    </Grid>

  );

}

export default NavBar;