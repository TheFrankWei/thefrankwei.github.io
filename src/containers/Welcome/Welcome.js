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
      // marginTop: '10%',
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
      // position: 'relative',
      fontFamily: `'Fira Sans', sans-serif`,
      backgroundColor: '#112F41',
      padding: '0.05em 0em 0.05em 0.7em',
      // color: '#557282',
      color: 'rgba(255, 255, 255, 0.8)',
      // color: 'transparent',

      textAlign: 'left',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        // textAlign: 'right', //for animated labels
        // textAlign: 'left',
        // right:'-60%',
        // right:'-50%',
        right:'-20em',
        // position: 'relative',
        // position: 'absolute',
        fontSize: '40px',
        // marginTop: '20%',
        // marginRight:'10%',
        // bottom: '20%',
        // right: '10%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        // right:'-40%'
        right:'-10em',
        // paddingTop:'10%',
        // minWidth: '100vw',
        // textAlign: 'center',
      },
      [theme.breakpoints.between('sm','md')]: {
        // textAlign: 'right',
        fontSize: '12px',
        right:'-28em',
        // right:'-50%',
        // bottom: '20%',
        // right: '10%',
      },
    },
}));

// const labels = ['Developer', ' | ', 'Designer', ' | ', 'Photographer'];
const labels = ['Hi', ', ', 'I ', 'design ', 'and ', 'develop '];

const Welcome = ({id, refProp}) => {
    const classes = useStyles();

    let text = ["Designer", "Photographer", "Developer"];
    let [labelState, setLabel] = useState("Designer");
    let [counter, setCounter] = useState(0);
    useEffect(()=>{
      
      const interval = setInterval(()=>{
        setLabel(labels[counter],3000);
        counter.length >= text.length? setCounter(0) : setCounter(counter++);
      });
      return ()=> clearInterval(interval);
    },[]);

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
      from: {opacity: 1, marginLeft: 1000}
    });

    const labelAnimation = useTrail(labels.length+1, {
      ref: labelRef,
      opacity: 1,
      from: { opacity: 0 },
    })

    useChain([welcomeTitleLeftRef, welcomeTitleRightRef, labelWrapperRef, labelRef], [0,0.8,1,2])

    return (
          <Grid container ref={refProp} className = {classes.welcome} id={id}>
           
           <Grid item xs={12}>
             <Grid container direction="column">

             <Grid item xs={12} className={classes.gridBreak}></Grid>
            <Grid item className={classes.welcomeTitleWrapper}>
              <Grid  item className={classes.welcomeAnimationSpace}/>
                <Grid  item className={classes.animationTitleWrapper}>
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
                </Grid>
               </Grid> 

            <Grid item xs={12} className={classes.gridBreak}></Grid>

              <Grid item xs = {12} >
                <animated.div style={labelWrapperAnimation} className={classes.labelWrapper}>
                {labelAnimation.map(({...rest}, index) =>{
                  if(index < labels.length){
                  return(<animated.span style={{...rest,}}>{labels[index]}</animated.span>)
                  } else {
                    return(<Glitch> <animated.span style={{...rest}}><IntervalLabel labels={['ux/ui', 'photographs', 'webapps', 'things']}/></animated.span> </Glitch>)
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
