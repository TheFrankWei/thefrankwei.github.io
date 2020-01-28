import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
    '@keyframes bounce': {
           '0%': {
                top: '0px'
           },
            '50%': {
                top: '50px'
            },
            '100%': {
                top: '0px'
            },
        },
        letter: {
            lineHeight: '110px',
            fontSize: '100px',
            fontWeight: 800,
            fontFamily: `'Noto Sans', sans-serif`,
            letterSpacing: '-20px',
            position: 'relative',
            display: 'inline-block',
            opacity: 0.9,
        },
        hovered: {
            animationName: `$bounce`,
            animationDuration: '2s',
        },
}));

const LETTER_COLORS = ['#112F41','#068587','#4FB99F','#F2B134','#ED553B']

const Letter = (props) => {
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
        <div
            ref= {refContainer}
            id="Letter" 
            style = {{...props.style,
                color: LETTER_COLORS[Math.floor(Math.random() * 5)]
            }}
            onMouseEnter={()=> setHover(true)}
            className={hover? classNames(classes.letter ,classes.hovered) : classNames(classes.letter)}
        >
            {props.value}
        </div>
    )
}

export default Letter;