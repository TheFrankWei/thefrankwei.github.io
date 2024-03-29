import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
  paper: {
    // fontFamily: `'Nunito', sans-serif`,
    fontFamily: `'Fira Sans', sans-serif`,
    background: 'rgba(255, 255, 255, 0.8)', 
    // padding: '1em 2em 1em 2em',
    boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    width: '100%',
  }
 
  
}));


const Paper = ( props ) => {
  const classes = useStyles();

    return (
        <div className={classNames(classes.paper,props.className)}>
            {props.children}
        </div>
    );

}

export default Paper;
