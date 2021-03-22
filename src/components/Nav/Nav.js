import React, {useState, useEffect} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core';
import UpIcon from './../../images/scroll_up_icon.svg';

export const useStyles = makeStyles(theme => ({
  Nav: {
    overflow: 'hidden',
    top:0,
    [theme.breakpoints.up('md')]: {
      right: 0,
    },
  
    position: 'fixed',
    backgroundColor: 'Transparent',
    opacity: .8,
    minWidth: '100vw',
    zIndex: 1,

    '& li':{
      float: 'right',
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',

      '& a':{
        fontFamily: `'Nunito', sans-serif`,
        display: 'block',
        color: '#3A3A32',

        textDecoration: 'none',
        [theme.breakpoints.up('md')]: {
          fontSize: '30px',
          padding: '0px 15px',
          paddingRight: '25px',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '15px',
          padding: '0px 5px',
          paddingRight: '15px',
        },

        '&:hover':{
          color: '#C9870D',
          textDecoration: 'underline',
        }
      }
    }
  },
  toTop:{
    position: 'fixed',
    bottom: 0,
    right: 0,
    backgroundColor: 'Transparent',
    backgroundRepeat:'no-repeat',
    border: 'none',
    cursor: 'pointer',
    width:20,
    height:20,
    padding: 10,
    opacity: .8,
  },
}));

const Nav = () => {
  const classes = useStyles();

  // const [showScroll, setScrollState] = useState(false);

  // const handleScroll = () => {
  //   const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
  //   if (boundingRect) {
  //     if (document.documentElement.getBoundingClientRect().top * -1 > 100){
  //       setScrollState(true);
  //     } else {
  //       setScrollState(false);
  //     }
  //   }
  // }

  // const scrollToTop= () => {
  //     window.scrollTo({top:0, behavior:'smooth'});
  // };

  // useEffect(()=> { 
  //   if (window.location.hash) {
  //     setTimeout(function() {
  //       //on refresh, change route back to 'home'
  //       window.location.href="/"
  //     }, 1);
  //   }
  //   window.onbeforeunload = function () {
  //     //on refresh, scroll to top
  //     window.scrollTo(0, 0);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () =>  window.removeEventListener('scroll', handleScroll);
  // }, [])

    return(
    <div>
      <div className={classes.Nav}>
        <ul>
          <li><NavHashLink smooth to='/#Contact'>Contact</NavHashLink></li>
          <li><NavHashLink smooth to='/#Portfolio'>Portfolio</NavHashLink></li>
          <li><NavHashLink smooth to='/#About'>About</NavHashLink></li>
          <li><NavHashLink smooth to='/#Home'>Home</NavHashLink></li>
        </ul>
      </div>

    {/* {showScroll && 
      <div className={classes.toTop}>
        <img onClick ={scrollToTop} src = {UpIcon} className={classes.icon} alt = 'scroll up!'/>
    </div>
    } */}

    </div>

  );

}

export default Nav;