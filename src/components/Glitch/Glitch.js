import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
    '@keyframes glitch': {
            '0%': {
            //   textShadow : '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)'
                textShadow : '0.05em 0 0 rgba(237, 85, 59, 0.75), -0.05em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em 0.05em 0 rgba(201,135,13,0.75)'
            },
            '14%': {
            //   textShadow : '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)'
                textShadow : '0.05em 0 0 rgba(237, 85, 59, 0.75), -0.05em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em 0.05em 0 rgba(201,135,13,0.75)'
            },
            '15%': {
            //   textShadow : '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)',
                textShadow : '-0.05em -0.025em 0 rgba(237, 85, 59, 0.75), 0.025em 0.025em 0 rgba(64, 160, 136, 0.75), -0.05em -0.05em 0 rgba(201,135,13,0.75)'
            },
            '49%': {
            //   textShadow : '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)',
                textShadow : '-0.05em -0.025em 0 rgba(237, 85, 59, 0.75), 0.025em 0.025em 0 rgba(64, 160, 136, 0.75), -0.05em -0.05em 0 rgba(201,135,13,0.75)'
            },
            '50%': {
            //   textShadow : '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)',
                textShadow : '0.025em 0.05em 0 rgba(237, 85, 59, 0.75), 0.05em 0 0 rgba(64, 160, 136, 0.75), 0 -0.05em 0 rgba(201,135,13,0.75)'
            },
            '99%': {
            //   textShadow : '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)',
                textShadow : '0.025em 0.05em 0 rgba(237, 85, 59, 0.75), 0.05em 0 0 rgba(64, 160, 136, 0.75), 0 -0.05em 0 rgba(201,135,13,0.75)'
            },
            '100%': {
            //   textShadow : '-0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)',
                textShadow : '-0.025em 0 0 rgba(237, 85, 59, 0.75), -0.025em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em -0.05em 0 rgba(201,135,13,0.75)'
            },
          },
    glitch: {
        // textShadow:'0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75)',
        textShadow:'0.05em 0 0 rgba(237, 85, 59, 0.75), -0.025em -0.05em 0 rgba(64, 160, 136, 0.75), 0.025em 0.05em 0 rgba(201,135,13,0.75)',
        animation: `$glitch 500ms infinite`,
        color: 'white',
        fontWeight: 500,
        position: 'relative',
    },
    glitch_span:{
        position: 'absolute',
        top: 0,
        left: 0,
    },
    firstChild: {
        animation: 'glitch 650ms infinite',
        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        transform: 'translate(-0.025em, -0.0125em)',
        /* color: green; */
        opacity: 0.8,
    },
    lastChild: {
        animation: 'glitch 375ms infinite',
        clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
        transform: 'translate(0.0125em, 0.025em)',
        /* color: red; */
        opacity: 0.8,
    },
}));



const Glitch = (props) => {
    const classes = useStyles();

    return(
        <span className={classes.glitch}>
            <span aria-hidden='true' className={classNames(classes.glitch, classes.glitch_span, classes.firstChild)}>
                {props.children}
            </span>
            {props.children}
            <span aria-hidden='true' className={classNames(classes.glitch, classes.glitch_span, classes.lastChild)}>
                {props.children}
            </span>
        </span>
    )
}

export default Glitch;