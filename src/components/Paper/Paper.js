import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
  paper: {
    // fontFamily: `'Nunito', sans-serif`,
    fontFamily: `'Fira Sans', sans-serif`,
    background: 'rgba(255, 255, 255, 0.8)', 
    padding: '1rem 2rem',
    boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.125)',
  }
 
  
}));


const Paper = ( props ) => {
  const classes = useStyles();

    return (
        <div className={classes.paper}>
            {props.children}
        </div>
    );

}

export default Paper;
