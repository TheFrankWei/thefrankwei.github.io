import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import useInterval from '../../util/hooks/useInterval.js';

export const useStyles = makeStyles(theme => ({
   
}));


const IntervalLabel = ( {labels} ) => {
    const classes = useStyles();

    let [labelState, setLabel] = useState(labels[0]);
    let [counter, setCounter] = useState(0);

    useInterval(() => {
      setLabel(labels[counter]);
      if(counter >= labels.length){
        setLabel(labels[0]);
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 1000);

  
    return (
         <span>{labelState}</span>
    );

}

export default IntervalLabel;
