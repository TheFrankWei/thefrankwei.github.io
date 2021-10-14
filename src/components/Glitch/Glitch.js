import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useStyles = makeStyles(theme => ({
    '@keyframes glitch': {
            '0%': {
            //   textShadow : '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)'
                textShadow : '0.05em 0 0 rgba(237, 85, 59, 0.75), -0.05em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em 0.05em 0 rgba(201,135,13,0.75)'
            },
            '14%': {
                textShadow : '0.05em 0 0 rgba(237, 85, 59, 0.75), -0.05em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em 0.05em 0 rgba(201,135,13,0.75)'
            },
            '15%': {
                textShadow : '-0.05em -0.025em 0 rgba(237, 85, 59, 0.75), 0.025em 0.025em 0 rgba(64, 160, 136, 0.75), -0.05em -0.05em 0 rgba(201,135,13,0.75)'
            },
            '49%': {
                textShadow : '-0.05em -0.025em 0 rgba(237, 85, 59, 0.75), 0.025em 0.025em 0 rgba(64, 160, 136, 0.75), -0.05em -0.05em 0 rgba(201,135,13,0.75)'
            },
            '50%': {
                textShadow : '0.025em 0.05em 0 rgba(237, 85, 59, 0.75), 0.05em 0 0 rgba(64, 160, 136, 0.75), 0 -0.05em 0 rgba(201,135,13,0.75)'
            },
            '99%': {
                textShadow : '0.025em 0.05em 0 rgba(237, 85, 59, 0.75), 0.05em 0 0 rgba(64, 160, 136, 0.75), 0 -0.05em 0 rgba(201,135,13,0.75)'
            },
            '100%': {
                textShadow : '-0.025em 0 0 rgba(237, 85, 59, 0.75), -0.025em -0.025em 0 rgba(64, 160, 136, 0.75), -0.025em -0.05em 0 rgba(201,135,13,0.75)'
            },
          },
    glitch: {
        color: 'white',
        fontWeight: 500,
        position: 'relative',
        // animationPlayState: 'paused',
        // '&:hover':{
        //     animationPlayState: 'running',
        // }
        [theme.breakpoints.up('md')]: {
            textShadow:'0.05em 0 0 rgba(237, 85, 59, 0.75), -0.025em -0.05em 0 rgba(64, 160, 136, 0.75), 0.025em 0.05em 0 rgba(201,135,13,0.75)',
            animation: `$glitch 500ms infinite`,
          },
    },
    glitch_span:{
        position: 'absolute',
        top: 0,
        left: 0,
    },
    firstChild: {
       
        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        transform: 'translate(-0.025em, -0.0125em)',
        /* color: green; */
        opacity: 0.8,
        [theme.breakpoints.up('md')]: {
            animation: 'glitch 650ms infinite',
          },
    },
    lastChild: {
        clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
        transform: 'translate(0.0125em, 0.025em)',
        /* color: red; */
        opacity: 0.8,
        [theme.breakpoints.up('md')]: {
            animation: 'glitch 375ms infinite',
          },
    },
    prefersReducedMotion: {
        animationDelay: '-1ms !important',
        animationDuration: '1ms !important',
        animationIterationCount: '1 !important',
        backgroundAttachment: 'initial !important',
        scrollBehavior: 'auto !important',
        transitionDuration: '0s !important',
        transitionDelay: '0s !important',
    }
}));



const Glitch = (props) => {
    const classes = useStyles();
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
    return(
        <span className={prefersReducedMotion? classNames(classes.glitch, classes.prefersReducedMotion) : classes.glitch}>
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