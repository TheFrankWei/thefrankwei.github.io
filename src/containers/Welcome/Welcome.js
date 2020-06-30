import React, { useRef } from 'react';
import Letter from './../../components/Letter/Letter.js';
import { makeStyles } from '@material-ui/core';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
export const useStyles = makeStyles(theme => ({
    welcome:{
        height: '100vh',
    },
    welcomeTitleWrapper:{
      paddingTop: '10%',
    },
    welcome_title: {
      // marginLeft: 40,
      display: 'block',
      textAlign: 'left',
      lineHeight: '70%',
      
    },
    labels: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      fontSize: '40px',
      fontFamily: `'Fira Sans', sans-serif`,
      fontColor: '#557282',
    },
}));

const labels = ['Developer', ' | ', 'Designer', ' | ', 'Photographer'];

const Welcome = () => {
    const classes = useStyles();

    const welcomeTitleLeftRef = useRef();
    const welcomeTitleLeftAnimation = useSpring({opacity: 1, marginLeft: 40,
                            ref: welcomeTitleLeftRef,
                            from: {opacity: 0, marginLeft: -5000,}})
    
    const welcomeTitleRightRef = useRef();
    const welcomeTitleRightAnimation = useSpring({opacity: 1, marginLeft: 40,
                            ref: welcomeTitleRightRef,
                            from: {opacity: 0, marginLeft: 1500,}})
    
    const labelRef = useRef();
    const labelAnimation = useTrail(labels.length, {
      ref: labelRef,
      opacity: 0.75,
      from: { opacity: 0 },
    })

    useChain([welcomeTitleLeftRef, welcomeTitleRightRef, labelRef], [0,0.5,1.5])
    return (
        <div className = {classes.welcome} id='Welcome'>
          <div className={classes.welcomeTitleWrapper}>
            <animated.h1 style={welcomeTitleLeftAnimation} className={classes.welcome_title}>
              <Letter style={{fontSize: 200,}} value="F"/>
              <Letter style={{fontSize: 200,}}value="R"/>
              <Letter style={{fontSize: 200,}} value="A"/>
              <Letter style={{fontSize: 200,}}value="N"/>
              <Letter style={{fontSize: 200,}} value="K"/>
            </animated.h1>
      
            <animated.h1 style={welcomeTitleRightAnimation} className={classes.welcome_title}>
              <Letter style={{fontSize: 200,}} value="W"/>
              <Letter style={{fontSize: 200,}} value="E"/>
              <Letter style={{fontSize: 200,}} value="I"/>
            </animated.h1>
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
