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
            [theme.breakpoints.up('md')]: {
                fontSize: '100px',
                letterSpacing: '-20px',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '70px',
                letterSpacing: '-15px',
            },
            fontWeight: 800,
            fontFamily: `'Noto Sans', sans-serif`,
            position: 'relative',
            display: 'inline-block',
            opacity: 0.9,
        },
        hovered: {
            animationName: `$bounce`,
            animationDuration: '2s',
        },
}));

//original colors
const LETTER_COLORS = ['#112F41','#068587','#4FB99F','#F2B134','#ED553B']

//higher contrast for web accessibility
// const LETTER_COLORS = ['#112F41','#068587', '#40A088', '#C9870D', '#ED553B']

const Letter = (props) => {
    const classes = useStyles();
    const refContainer = useRef() 

    const randomColor = () => {
        return LETTER_COLORS[Math.floor(Math.random() * 5)]
    }

    const [hover, setHover] =useState(false);
    const [color, setColor] = useState(randomColor)
    

    const animDone = () => {
        setHover(false);
      }

    useEffect(()=> { 
        let currentRef = refContainer.current;
        currentRef.addEventListener('animationend', animDone);
        return () => currentRef.removeEventListener('animationend', animDone);
    }, [])

    return(
        <div
            ref= {refContainer}
            id="Letter" 
            style = {{...props.style,
                color: color
            }}
            onMouseEnter={()=> {
            setHover(true);
            setColor(randomColor);
            }}
            className={hover? classNames(classes.letter ,classes.hovered) : classNames(classes.letter)}
        >
            {props.value}
        </div>
    )
}

export default Letter;