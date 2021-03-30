import React, { useRef } from 'react';
import { useSpring, useChain, animated } from 'react-spring';
import Letter from './../../components/Letter/Letter.js';
import IconButton from './../../components/IconButton/IconButton.js';
import { makeStyles, Grid } from '@material-ui/core';
import GitHub from './../../images/github.svg'
import Linkedin from './../../images/linkedin.svg'
import Flickr from './../../images/flickr.svg'

export const useStyles = makeStyles(theme => ({
  contact:{
    // minHeight: '80vh',
    //  marginTop: '5%',
    //  marginBottom: '10%',
  },
  gridBreak:{
    [theme.breakpoints.up('md')]: {
      minHeight:'20vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight:'200vh',
    },
  },
  contact_title:{
    pointerEvents: 'auto',
    display: 'block',
    textAlign: 'center',
  },
  contact_icons:{
    textAlign: 'center',
    pointerEvents: 'auto',
  },
}));


const Contact = ({refProp, isVisible, id}) =>{
  const classes = useStyles();

  const contactTitleRef = useRef();
  const contactTitleAnimation = useSpring({opacity: isVisible? 1 : 0,
                          ref: contactTitleRef,
                          delay: 300,
                          from: {opacity: 0,}})
  
  const contactLinkRef = useRef();
  const contactLinkAnimation = useSpring({opacity: isVisible? 1:0, marginTop: isVisible? 10: 100,
                          ref: contactLinkRef,
                          delay: 300,
                          from: {opacity: 0, marginTop: 100,}})

    useChain([contactTitleRef, contactLinkRef], [0,0.6])
    return (
      <Grid container direction="column" ref={refProp} className = {classes.contact} id={id}>
        <Grid item xs={12} className={classes.gridBreak}></Grid>
        <Grid item xs={12}>
        <animated.h1 style={contactTitleAnimation} className={classes.contact_title}>
          <Letter value="C"/>
          <Letter value="O"/>
          <Letter value="N"/>
          <Letter value="T"/>
          <Letter value="A"/>
          <Letter value="C"/>
          <Letter value="T"/>
        </animated.h1>
        </Grid>
      <Grid item className = {classes.contact_icons}>
        <animated.div style={contactLinkAnimation} >
          <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://github.com/TheFrankWei' src={GitHub} target="_blank" rel="noopener"  alt="Github"/>
          <IconButton style={{height:80, width:80,  marginLeft: '5%', marginRight: '5%',}} href='https://www.linkedin.com/in/TheFrankWei/' src={Linkedin} iconName='linkedIn' target="_blank" rel="noopener"  alt="Linkedin"/>
          <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://www.flickr.com/photos/144760780@N08/?' src={Flickr} iconName='flickr' target="_blank" rel="noopener"  alt="Flickr"/>
        </animated.div>
      </Grid>
    </Grid>
    );
  }


export default Contact;
