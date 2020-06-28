import React, {useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import IconButton from './../IconButton/IconButton.js';
import { makeStyles } from '@material-ui/core';
import UpIcon from './../../images/scroll_up_icon.svg';

export const useStyles = makeStyles(theme => ({
  Nav: {
    overflow: 'hidden',
    top:0,
    right: 0,
    position: 'fixed',
    backgroundColor: 'white',
    opacity: .8,
    width: '100vw',
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
        padding: '0px 15px',
        paddingRight: '25px',
        textDecoration: 'none',
        fontSize: '30px',

        '&:hover':{
          color: '#FF8F00',
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

  const [showScroll, setScrollState] = useState(false)

  const handleScroll = () => {
    const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100){
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    }
  }

  const scrollToTop= () => {
      window.scrollTo({top:0, behavior:'smooth'});
  };

  useEffect(()=> { 
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll);
  }, [])

    return(
    <div>
      <div className={classes.Nav}>
        <ul>
          <li><Link smooth to='/#Contact'>Contact</Link></li>
          <li><Link smooth to='/#Portfolio'>Portfolio</Link></li>
          <li><Link smooth to='/#About'>About</Link></li>
          <li><Link smooth to='/#Welcome'>Home</Link></li>
        </ul>
      </div>

    { showScroll && 
      <div className={classes.toTop}>
      {/* <IconButton
        onClick={scrollToTop}
        src={UpIcon}
        alt='scroll up!' /> */}
      <a  onClick ={scrollToTop}>
        <img  src = {UpIcon} className={classes.icon} alt = 'scroll up!'/>
      </a>
    </div>
    }

    </div>

  );

}

export default Nav;