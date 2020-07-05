import React, { useRef }  from 'react';
import Letter from './../../components/Letter/Letter.js';
import Portrait from './../../images/portrait.jpg';
import { useSpring, useChain, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  about:{
    'min-height': '100vh',
  },
  about_title:{
    textAlign: 'left',
    paddingLeft: '20%',
    paddingTop:'3%',
    fontSize:'100',
  },
  portrait: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      float:'left',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },

    '& img' : {
      overflow: 'hidden',
      borderRadius: '50%',
      transition: '0.70s',
      verticalAlign: 'top',
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        border: '20px solid #4FB99F',
      },
      [theme.breakpoints.down('md')]: {
        border: '15px solid #4FB99F',
        verticalAlign: 'middle',
        height: 200,
        width: 200,
      },

      '&:hover': {
        transition: '0.70s',
        transform: 'rotate(360deg)',
      }
    },
  },
  bioWrapper: {
    display: 'block',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  bio: {
    float: 'left',
    fontFamily: `'Nunito', sans-serif`,
    
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
      width: '100%',
    },
    [theme.breakpoints.between('md','lg')]: {
      fontSize: 15,
      width: '55%',
      paddingLeft: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      width: '60%',
      paddingLeft: '5%',
    },
    
  }
 
  
}));


const About = ({isVisible, refProp, id}) => {
  const classes = useStyles();

  const aboutTitleRef = useRef();
  // const aboutTitleAnimation = useSpring({opacity: 1, marginLeft: 60,
  //                           ref: aboutTitleRef,
  //                           from: {opacity: 0, marginLeft: -5000,}})
  const aboutTitleAnimation = useSpring({opacity: isVisible? 1 : 0, marginLeft: isVisible? 60 : -5000,
                            ref: aboutTitleRef,
                            delay: 300 ,
                            from:{ opacity: 0 }})    
  
  const aboutPicRef = useRef();
  const aboutPicAnimation = useSpring({ opacity: isVisible? 1 : 0, 
                          ref: aboutPicRef,
                          delay: 500,
                          config: {duration: 600},
                          from:{ opacity: 0,  }})                          
   
  const aboutBioRef = useRef();
  const aboutBioAnimation = useSpring({ opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : 200,
                          ref: aboutBioRef,
                          delay: 300,
                          from:{ opacity: 0, marginLeft: 200 }})                             
                        
                          
  useChain([aboutTitleRef, aboutPicRef, aboutBioRef], [0,1,1.5])
    return (
      <div ref={refProp} className = {classes.about} id={id}>
        <animated.h1 style={aboutTitleAnimation} className= {classes.about_title}>
            <Letter value="A"/>
            <Letter value="B"/>
            <Letter value="O"/>
            <Letter value="U"/>
            <Letter value="T"/>
        </animated.h1>

            <div className = {classes.bioWrapper}>

              <animated.div style={aboutPicAnimation} className ={classes.portrait}>
                <img  src={Portrait} alt="this is me"/>
              </animated.div>

              <animated.div style={aboutBioAnimation} className = {classes.bio}>
                <p>Thanks for visiting my website! My name is Frank Wei and I currently live in New York City. I love coding, designing, and combining the two to make awesome creations.</p>
                <br/><p>I built this site from scratch, taking design inspiration other cool sites as well as learning React along the way (Take a look at the code <a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/thefrankwei.github.io">here</a>). When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
                <br/><p>In this site, you can browse through my portfolio of design, projects and photography. Hope you enjoy!</p>
              </animated.div>


            </div>
      </div>
    );

}

export default About;
