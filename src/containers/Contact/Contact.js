import React, { useRef } from 'react';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import Letter from './../../components/Letter/Letter.js';
import IconButton from './../../components/IconButton/IconButton.js';
import { makeStyles } from '@material-ui/core';
import GitHub from './../../images/github.svg'
import Linkedin from './../../images/linkedin.svg'
import Flickr from './../../images/flickr.svg'

export const useStyles = makeStyles(theme => ({
  contact:{
    'min-height': '80vh',
     marginTop: '5%',
     marginBottom: '10%',
  },
  contact_title:{
    paddingTop: '10%',
    display: 'block',
    textAlign: 'center',
  },
  contact_icons:{
    textAlign: 'center',
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
      <div ref={refProp} className = {classes.contact} id={id}>
      <animated.h1 style={contactTitleAnimation} className={classes.contact_title}>
        <Letter value="C"/>
        <Letter value="O"/>
        <Letter value="N"/>
        <Letter value="T"/>
        <Letter value="A"/>
        <Letter value="C"/>
        <Letter value="T"/>
      </animated.h1>

      <animated.div style={contactLinkAnimation} className = {classes.contact_icons}>
        <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://github.com/TheFrankWei' src={GitHub} target="_blank" rel="noopener"  alt="Github"/>
        <IconButton style={{height:80, width:80,  marginLeft: '5%', marginRight: '5%',}} href='https://www.linkedin.com/in/TheFrankWei/' src={Linkedin} iconName='linkedIn' target="_blank" rel="noopener"  alt="Linkedin"/>
        <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://www.flickr.com/photos/144760780@N08/?' src={Flickr} iconName='flickr' target="_blank" rel="noopener"  alt="Flickr"/>
      </animated.div>
      </div>
    );
  }


export default Contact;
