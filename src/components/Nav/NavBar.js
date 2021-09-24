import React, {useState, useRef} from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { makeStyles, Grid, IconButton, Backdrop } from '@material-ui/core';
import {useSpring, animated} from 'react-spring'

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

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
    NavMenu: {
        minHeight: '100vh',
        fontSize: '1.5em',
        minWidth: '8em',
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        // backgroundColor: `hsl($var(--hue), 95%, 0%)`,
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
    //this.parallax.scrollTo //somehow pass refs into here

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

  const navMenuRef = useRef();
//   const navMenuAnimation = useSpring({
//                           ref: navMenuRef,
//                           from:{ left:0,  }})         
const navMenuAnimation = useSpring({
    ref: navMenuRef,
    // opacity: menuOpen ? 1 : 0,
    // transform: menuOpen ? `translateX(0)` : `translateX(-100%)`
    opacity: 1,
    transform:`translateX(0)`,
    from: {
        opacity: 0,
        transform: `translateX(-100%)`,
    }
  });

  const AnimatedGrid = animated(Grid);

    return(
    <Grid container directon='column' justify='flex-end' alignItems='flex-end' className={classes.Nav}>
        
        <Grid item xs={12} className={classes.NavBar}>
            <IconButton className={classes.NavButton} onClick={()=> setMenu(!menuOpen)}>
                {menuOpen? <MenuOpenIcon/> : <MenuIcon/>}
            </IconButton>
        </Grid>

        

        {menuOpen ?
        <Grid item >
            <SideMenu/>
            <Backdrop open={menuOpen} onClick={()=> setMenu(false)}/>
        </Grid> : null
        }
    
    </Grid>

  );

}

export default NavBar;