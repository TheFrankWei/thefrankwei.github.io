import React, { useState, useRef, useEffect } from 'react';
import Letter from './../../components/Letter/Letter.js';
import { makeStyles, Grid } from '@material-ui/core';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import IntervalLabel from '../../components/IntervalLabel/IntervalLabel.js';
import Glitch from '../../components/Glitch/Glitch.js';

export const useStyles = makeStyles(theme => ({
    welcome:{
      [theme.breakpoints.up('lg')]: {
        minHeight: '20vh',
      },
      [theme.breakpoints.down('lg')]: {
        // minHeight: '60vh',
      },
      // marginBottom: '5%',
    },
    welcomeTitleWrapper:{
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
    gridBreak:{
      [theme.breakpoints.up('md')]: {
        minHeight:'20vh',
      },
      [theme.breakpoints.down('md')]: {
        minHeight:'5vh',
      },
    },
    labelWrapper: {
      'box-shadow': '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',

      display: 'inline-block',
      width: '100%',
      fontFamily: `'Fira Sans', sans-serif`,
      backgroundColor: '#112F41',
      padding: '0.05em 0em 0.05em 0.7em',
      color: 'rgba(255, 255, 255, 0.8)',

      textAlign: 'left',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        outline: '1px solid #000',
        textShadow: '#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px, #000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px',
        right:'-20em',
        fontSize: '40px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        right:'-10em',
      },
      [theme.breakpoints.between('sm','md')]: {
        fontSize: '12px',
        right:'-28em',
      },
    },
}));

const HEADER_1 = 'FRANK'
const HEADER_2= 'WEI'
const INTRO = ['Hi', ', ', 'I ', 'design ', 'and ', 'develop '];
const LABELS = ['ux/ui', 'photographs', 'webapps', 'things']

const Welcome = ({id, refProp}) => {
    const classes = useStyles();
    const letterHeader1 = [...HEADER_1]
    const letterHeader2 = [...HEADER_2]

    const welcomeTitleLeftRef = useRef();
    const welcomeTitleLeftAnimation = useSpring({opacity: 1, marginLeft: 0,
                            ref: welcomeTitleLeftRef,
                            from: {opacity: 0, marginLeft: -5000,}})
    
    const welcomeTitleRightRef = useRef();
    const welcomeTitleRightAnimation = useSpring({opacity: 1, marginLeft: 0,
                            ref: welcomeTitleRightRef,
                            from: {opacity: 0, marginLeft: 150,}})
    
    const labelRef = useRef();
    
    const labelWrapperRef = useRef();
    const labelWrapperAnimation = useSpring({opacity: 1, marginLeft:0,
      ref: labelWrapperRef,
      from: {opacity: 1, marginLeft: 2160}
    });
    // 2160 for the 4k monitors

    const labelAnimation = useTrail(INTRO.length+1, {
      ref: labelRef,
      opacity: 1,
      from: { opacity: 0 },
    })

    useChain([welcomeTitleLeftRef, welcomeTitleRightRef, labelWrapperRef, labelRef], [0.8,0.5,0.8,1.1])

    return (
          <Grid container ref={refProp} className = {classes.welcome} id={id}>
           
           <Grid item xs={12}>
             <Grid container direction="column">

             <Grid item xs={12} className={classes.gridBreak}></Grid>
            <Grid item className={classes.welcomeTitleWrapper}>
              <Grid  item className={classes.welcomeAnimationSpace}/>
                <Grid  item className={classes.animationTitleWrapper}>
                  <animated.h1 style={welcomeTitleLeftAnimation} className={classes.welcomeTitle}>
                    {
                      letterHeader1.map(item => (<Letter value={item}/>))
                    }
                  </animated.h1>

                  <animated.h1 style={welcomeTitleRightAnimation} className={classes.welcomeTitle}>
                    {
                      letterHeader2.map(item => (<Letter value={item}/>))
                    }
                  </animated.h1>
                </Grid>
               </Grid> 

            <Grid item xs={12} className={classes.gridBreak}></Grid>

              <Grid item xs = {12} >
                <animated.div style={labelWrapperAnimation} className={classes.labelWrapper}>
                {labelAnimation.map(({...rest}, index) =>{
                  if(index < INTRO.length){
                  return(<animated.span style={{...rest,}}>{INTRO[index]}</animated.span>)
                  } else {
                    return(<Glitch> <animated.span style={{...rest}}><IntervalLabel labels={LABELS}/></animated.span> </Glitch>)
                  }
                })
                }
                </animated.div>
              </Grid>
    
            </Grid>
            </Grid>
          </Grid>
    );

}

export default Welcome;
