import React, { useState, useRef } from 'react';
import Letter from './../../components/Letter/Letter.js';
import { makeStyles } from '@material-ui/core';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";

export const useStyles = makeStyles(theme => ({
    welcome:{
      [theme.breakpoints.up('lg')]: {
        minHeight: '80vh',
      },
      [theme.breakpoints.down('lg')]: {
        minHeight: '60vh',
      },
      marginBottom: '5%',
    },
    welcomeTitleWrapper:{
      marginTop: '10%',
      display: 'flex',
    },

    welcomeAnimationSpace: {
      //empty div so that animations will work on smaller breakpoints
      display: 'inline-block',
      [theme.breakpoints.up('md')]: {
        minHeight: '20px',
        minWidth: '40px',
      },
    },

    animationTitleWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },

    welcomeTitle: {
      display: 'block',
      textAlign: 'left',
      lineHeight: '70%',
      '& div': {
        [theme.breakpoints.up('md')]: {
          fontSize: '200px !important',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '110px !important',
          marginLeft: '0px !important',
        },
      }
      
    },
    labels: {
      display: 'inline-block',
      position: 'relative',
      fontFamily: `'Fira Sans', sans-serif`,
      fontColor: '#557282',
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
        position: 'absolute',
        fontSize: '40px',
        bottom: '20%',
        right: '10%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        paddingTop:'10%',
        minWidth: '100vw',
        textAlign: 'center',
      },
      [theme.breakpoints.between('sm','md')]: {
        textAlign: 'right',
        fontSize: '12px',
        bottom: '20%',
        right: '10%',
      },
    },
}));

const labels = ['Developer', ' | ', 'Designer', ' | ', 'Photographer'];

const Welcome = ({id, refProp}) => {
    const classes = useStyles();

    const welcomeTitleLeftRef = useRef();
    const welcomeTitleLeftAnimation = useSpring({opacity: 1, marginLeft: 0,
                            ref: welcomeTitleLeftRef,
                            from: {opacity: 0, marginLeft: -5000,}})
    
    const welcomeTitleRightRef = useRef();
    const welcomeTitleRightAnimation = useSpring({opacity: 1, marginLeft: 0,
                            ref: welcomeTitleRightRef,
                            from: {opacity: 0, marginLeft: 150,}})
    
    const labelRef = useRef();
    const labelAnimation = useTrail(labels.length, {
      ref: labelRef,
      opacity: 0.75,
      from: { opacity: 0 },
    })

    useChain([welcomeTitleLeftRef, welcomeTitleRightRef, labelRef], [0,0.8,1.5])
    return (
          <div ref={refProp} className = {classes.welcome} id={id}>
           
            <div className={classes.welcomeTitleWrapper}>
              <div className={classes.welcomeAnimationSpace}/>
                <div className={classes.animationTitleWrapper}>
                  <animated.h1 style={welcomeTitleLeftAnimation} className={classes.welcomeTitle}>
                   <Letter value="F"/>
                   <Letter value="R"/>
                    <Letter value="A"/>
                    <Letter value="N"/>
                    <Letter value="K"/>
                  </animated.h1>

                  <animated.h1 style={welcomeTitleRightAnimation} className={classes.welcomeTitle}>
                    <Letter value="W"/>
                    <Letter value="E"/>
                    <Letter value="I"/>
                  </animated.h1>
                </div>
               </div> 
            <div className={classes.labels}>
              {labelAnimation.map(({...rest}, index) =>(
                <animated.span style={{...rest}}>{labels[index]}</animated.span>
              ))
              }
            </div>
          </div>
    );

}

export default Welcome;
