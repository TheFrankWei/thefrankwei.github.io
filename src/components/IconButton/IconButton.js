import React from 'react';
import { makeStyles, Icon } from '@material-ui/core';

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
 icon:{
   '&:hover':{
    animationName: '$bounce',
    animationDuration: '0.75s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 1,
   }
 }
}));

const IconButton = (props) => {
  const classes = useStyles();

return(
  
    <a  id = {props.id} href= {props.href} target="_blank" rel="noopener noreferrer" onClick ={props.onClick}>
      <img style={props.style} src = {props.src} className={classes.icon} alt = {props.alt}/>
    </a>

)

}
export default IconButton;
