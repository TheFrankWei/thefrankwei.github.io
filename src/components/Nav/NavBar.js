import React, {useState, useEffect} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import { makeStyles, Grid, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export const useStyles = makeStyles(theme => ({
    NavBar: {
        position: 'fixed',
        // overflow: 'hidden',
        zIndex : 1,
        
    },
    NavButton: {
        margin: '0em 1em 0em 0em',
  
    },
    NavMenu: {
        // position: 'fixed',
        minHeight: '100vh',
        fontSize: '1.5em',
        minWidth: '8em',
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
    },
    NavItem: {
        padding: '0.5em 0.5em 0.5em 0.5em',
        fontFamily: `'Fira Sans', sans-serif`,
        '& a':{
            color: '#3A3A32',
            textDecoration: 'none',

            '&:hover':{
                color: '#C9870D',
                textDecoration: 'underline',
            }
        },
    },
}));

const SideMenu = () => {
    const classes = useStyles();
  
      return(
        <Grid container direction='column'  className={classes.NavMenu}>
            <Grid item className={classes.NavItem}>
               <NavHashLink smooth to='/#Home'>Home</NavHashLink>
            </Grid>  
            <Grid item className={classes.NavItem}>
                <NavHashLink smooth to='/#About'>About</NavHashLink>
            </Grid> 
            <Grid item className={classes.NavItem}>
                <NavHashLink smooth to='/#Portfolio'>Portfolio</NavHashLink>
            </Grid>  
            <Grid item className={classes.NavItem}>
                <NavHashLink smooth to='/#Contact'>Contact</NavHashLink>
            </Grid>        
        </Grid>
      )
}

const NavBar = () => {
  const classes = useStyles();
  const [menuOpen, setMenu] = useState(false);

    return(
    <Grid container directon='column' alignItems='flex-end' className={classes.NavBar}>
        
        <Grid item xs={12} className={classes.NavButton}>
            <IconButton onClick={()=> setMenu(!menuOpen)}>
                {menuOpen? <MenuOpenIcon/> : <MenuIcon/>}
            </IconButton>
        </Grid>

        <Grid item>
            {menuOpen? <SideMenu/> : null}
        </Grid>
    </Grid>

  );

}

export default NavBar;