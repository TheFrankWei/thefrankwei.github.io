import React, { useState, useRef }  from 'react';
import Letter from './../../components/Letter/Letter.js';
import Portrait from './../../images/portrait.jpg';
import { useSpring, useChain, animated } from 'react-spring';
import { makeStyles, Grid, } from '@material-ui/core';
import Draggable from 'react-draggable';
import classNames from 'classnames';

export const useStyles = makeStyles(theme => ({
  about:{
    // minHeight: '80vh',
  },
  gridBreak:{
    [theme.breakpoints.up('md')]: {
      minHeight:'20vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight:'20vh',
    },
  },
  aboutTitleWrapper:{
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  aboutAnimationSpace: {
    //empty div so that animations will work on smaller breakpoints
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      minHeight: '20px',
      minWidth: '60px',
      paddingLeft: '20%',
    },
  },

  aboutTitle:{
    textAlign: 'left',
    fontSize:'100',
  },
  portraitWrapper: {
    opacity: 0,
    transition: 'opacity 600ms',

    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      float:'left',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },

    '& img' : {
      userDrag: 'none',
      overflow: 'hidden',
      borderRadius: '50%',
      transition: '0.70s',
      verticalAlign: 'middle',
      [theme.breakpoints.up('md')]: {
        border: '2px solid #112F41',
        outline: '20px solid #4FB99F',
        boxShadow: '0 0 0 22px #112F41',
        
        width:'auto',
        height: 'auto',
      },
      [theme.breakpoints.down('md')]: {
        border: '15px solid #4FB99F',
        height: 200,
        width: 200,
      },
      '&:hover': {
        cursor: 'grab',
        [theme.breakpoints.up('md')]: {
          outlineWidth: '26px',
          outlineColor: '#F2B134',
          boxShadow: '0 0 0 28px #112F41',
        },
        [theme.breakpoints.down('md')]: {
          borderColor: '#F2B134',
        },
      },
    },
  },
  portraitVisible:{
    opacity: 1,
    //uses this and visibility sensor to hide portrait
  },
  portraitClicked:{
    [theme.breakpoints.up('md')]: {
      outlineColor: 'black',
    },
    [theme.breakpoints.down('md')]: {
      borderColor: '#F2B134',
    },
  },
  portrait:{
    width: 'auto',
    height: 'auto',
  },
  bioWrapper: {
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  bio: {
    float: 'right',
    fontFamily: `'Fira Sans', sans-serif`,
    color: '#000000',
    // '&:hover ':{
    //   borderRadius: '2rem',
    //   boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.4)',
    // },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md','lg')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  }
 
  
}));

const HEADER = 'ABOUT'
const About = ({isVisible, refProp, id}) => {
  const classes = useStyles();
  const letterHeader = [...HEADER]

  const [isBioImageVisible, setBioImageVisibility] = useState(false);
  const [bioImageClicked, setBioImageClicked] = useState(false);
  const aboutTitleRef = useRef();
  const aboutTitleAnimation = useSpring({opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : -5000,
                            ref: aboutTitleRef,
                            delay: 300 ,
                            from:{ opacity: 0, }})    
  
  const aboutPicRef = useRef();
  // const aboutPicAnimation = useSpring({ opacity: isVisible? 1 : 0, 
  //                         ref: aboutPicRef,
  //                         delay: 500,
  //                         config: {duration: 600},
  //                         from:{ opacity: 0,  }})                          
   
  const aboutBioRef = useRef();
  const aboutBioAnimation = useSpring({ opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : 50,
                          ref: aboutBioRef,
                          delay: 300,
                          from:{opacity: 0, 
                                marginLeft: 50,  
                                background: 'rgba(255, 255, 255, 0.375)', 
                                padding: '1rem 2rem',
                                'box-shadow': '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
                                'border-radius': '2rem',
                                'border': '1px solid rgba(255, 255, 255, 0.125)',
                        }})                             

  useChain([aboutTitleRef, aboutPicRef, aboutBioRef], [0,1,1.5])

  const bioImageChange = isVisible => {
    console.log('bio image visible');
    isVisible && setBioImageVisibility(isVisible);
  }
    return (
      <Grid container direction="column" ref={refProp} className = {classes.about} id={id}>
        <Grid item xs={12} className={classes.gridBreak}></Grid>
         <Grid item xs={12} className={classes.aboutTitleWrapper}>
            <Grid item className={classes.aboutAnimationSpace}/>
              <animated.h1 style={aboutTitleAnimation} className= {classes.aboutTitle}>
                {
                  letterHeader.map(item => (<Letter value={item}/>))
                }
              </animated.h1>
          </Grid>

            <Grid item container direction = 'row' className = {classes.bioWrapper}>

         
            <Draggable
              onStart={()=>setBioImageClicked(true)}
            >
              <Grid item xs={12} sm={5} md={4} 
              className={isVisible? bioImageClicked? classNames(classes.portraitWrapper, classes.portraitVisible, classes.portraitClicked ) : classNames(classes.portraitWrapper, classes.portraitVisible) 
              : classes.portraitWrapper}>
                <img className= {isBioImageVisible? classNames(classes.portrait, classes.portraitVisible) : classes.portrait} src={Portrait} alt="this is me"/>
              </Grid>
            </Draggable>
  
            <Grid item xs={12} sm ={6} md={8} xl={9} className = {classes.bio} >
                  <animated.div style={aboutBioAnimation}>
                    <p>Thanks for visiting my website! My name is Frank Wei and I currently live in Boston. I love coding, designing, and combining the two to make awesome creations. When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
                    <br/>
                    <p>I built this site from scratch, learning React and other cool things along the way! Definitely check it out on desktop as there are slight differences on mobile for better performance.</p>
                    <br/>
                    <p>In this site, you can browse through my portfolio of design, projects and photography (take a look at the <a target="_blank" rel="noopener noreferrer" aria-label='link-to-github-repo' href = "https://github.com/TheFrankWei/thefrankwei.github.io">Github repo</a>). Hope you enjoy!</p>
                  </animated.div>
              </Grid>

            </Grid>
      </Grid>
    );

}

export default About;
