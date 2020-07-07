import React, { useRef }  from 'react';
import Letter from './../../components/Letter/Letter.js';
import Portrait from './../../images/portrait.jpg';
import { useSpring, useChain, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const useStyles = makeStyles(theme => ({
  about:{
    minHeight: '80vh',
    
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
    paddingTop:'10%',
    fontSize:'100',
  },
  portrait: {
    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      float:'left',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },

    '& img' : {
      overflow: 'hidden',
      borderRadius: '50%',
      transition: '0.70s',
      verticalAlign: 'middle',
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        border: '20px solid #4FB99F',
      },
      [theme.breakpoints.down('md')]: {
        border: '15px solid #4FB99F',
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
    float: 'right',
    fontFamily: `'Nunito', sans-serif`,
    fontColor: '#557282',

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


const About = ({isVisible, refProp, id}) => {
  const classes = useStyles();

  const aboutTitleRef = useRef();
  const aboutTitleAnimation = useSpring({opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : -5000,
                            ref: aboutTitleRef,
                            delay: 300 ,
                            from:{ opacity: 0, }})    
  
  const aboutPicRef = useRef();
  const aboutPicAnimation = useSpring({ opacity: isVisible? 1 : 0, 
                          ref: aboutPicRef,
                          delay: 500,
                          config: {duration: 600},
                          from:{ opacity: 0,  }})                          
   
  const aboutBioRef = useRef();
  const aboutBioAnimation = useSpring({ opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : 50,
                          ref: aboutBioRef,
                          delay: 300,
                          from:{ opacity: 0, marginLeft: 50 }})                             
  
  const AnimatedGrid = animated(Grid);
                          
  useChain([aboutTitleRef, aboutPicRef, aboutBioRef], [0,1,1.5])
    return (
      <div ref={refProp} className = {classes.about} id={id}>
         <div className={classes.aboutTitleWrapper}>
            <div className={classes.aboutAnimationSpace}/>
            <animated.h1 style={aboutTitleAnimation} className= {classes.aboutTitle}>
              <Letter value="A"/>
              <Letter value="B"/>
              <Letter value="O"/>
              <Letter value="U"/>
              <Letter value="T"/>
              </animated.h1>
          </div>

            <Grid container direction = 'row' className = {classes.bioWrapper}>

              <AnimatedGrid item xs={12} sm={5} md={4}style={aboutPicAnimation} className ={classes.portrait}>
                <img  src={Portrait} alt="this is me"/>
              </AnimatedGrid>

              <AnimatedGrid item xs={12} sm ={6} md={8} xl={9} style={aboutBioAnimation} className = {classes.bio}>
                <p>Thanks for visiting my website! My name is Frank Wei and I currently live in New York City. I love coding, designing, and combining the two to make awesome creations.</p>
                <br/><p>I built this site from scratch, taking design inspiration other cool sites as well as learning React along the way (Take a look at the code <a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/thefrankwei.github.io">here</a>). When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
                <br/><p>In this site, you can browse through my portfolio of design, projects and photography. Hope you enjoy!</p>
              </AnimatedGrid>


            </Grid>
      </div>
    );

}

export default About;
