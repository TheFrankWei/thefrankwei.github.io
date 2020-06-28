import React , {useState, useEffect, useRef}  from 'react';
import { makeStyles, Icon } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
  '@keyframes bounce': {
    '25%': {
      transform: 'translateY(-9px)',
    },
    '50%': {
      transform: 'translateY(0px)',
    },
    '75%': {
      transform: 'translateY(-4px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    }
 },
  iconWrapper:{
    display: 'inline-block',
    margin: '5px',
  },
  hovered: {
    animationName: `$bounce`,
    animationDuration: '2s',
  },
}));

const IconButton = (props) => {
  const classes = useStyles();
  const refContainer = useRef() 
  const [hover, setHover] =useState(false);
    
  const animDone = () => {
      setHover(false);
    }

  useEffect(()=> { 
      refContainer.current.addEventListener('animationend', animDone);
      return () => refContainer.current.removeEventListener('animationend', animDone)
  }, [])

return(
  <div ref= {refContainer} className={hover? classNames(classes.iconWrapper ,classes.hovered) : classNames(classes.iconWrapper)}  onMouseEnter={()=> setHover(true)}>
    <a  id = {props.id} href= {props.href} target="_blank" rel="noopener noreferrer" onClick ={props.onClick}>
      <img  style={props.style} src = {props.src} className={classes.icon} alt = {props.alt}/>
    </a>
    </div>
)

}
export default IconButton;
