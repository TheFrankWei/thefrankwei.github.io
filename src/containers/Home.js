import React, {useState, useRef, useEffect, useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import VisibilitySensor from "react-visibility-sensor";

export const useStyles = makeStyles(theme => ({
    child:{
      scrollSnapAlign: 'start',
      scrollSnapStop: 'always',
      minHeight:'100vh',
    },
}));

const Home = () => {
    const classes = useStyles();

    const welcomeRef = useRef();
    const aboutRef = useRef();
    const portfolioRef = useRef();
    const contactRef = useRef();

    const [isAboutVisible, setAboutVisibility] = useState(false);
    const [isPortfolioVisible, setPortfolioVisibility] = useState(false);
    const [isContactVisible, setContactVisibility] = useState(false);
    // const [y, setY] = useState(window.scrollY);
    // const [currentRef, setCurrentRef] = useState(welcomeRef);
    
    const refArray = [welcomeRef, aboutRef, portfolioRef, contactRef];

    // const scrollToRef = (ref) => {
    //   setCurrentRef(ref);
    //   window.scrollTo(0, ref.current.offsetTop, {behavior: 'smooth'}); 
    // } 

    // const executeScroll = useCallback(
    //   e => {
    //     const window = e.currentTarget;
    //     let currentRefIndex = refArray.indexOf(currentRef);
    //     if (y > window.scrollY) {
    //       //scroll up
    //       if(currentRefIndex > 0){
    //         scrollToRef(refArray[currentRefIndex - 1]);
    //       }
    //     } else if (y < window.scrollY) {
    //       //scroll down
    //       if(currentRefIndex < refArray.length-1){
    //         scrollToRef(refArray[currentRefIndex + 1]);
    //       }
    //     }
    //     setY(window.scrollY);
    //   }, [y]
    // );    

    // useEffect(()=> { 
    //   //componentDidMount
    //   window.addEventListener('scroll', e => executeScroll(e), { passive: true });
    //   return () => {
    //     //componentWillUnmount
    //     window.removeEventListener('scroll', e => executeScroll(e));
    //   }
    // }, [])

    const aboutChange = isVisible => {
      isVisible && setAboutVisibility(isVisible);
    }

    const portfolioChange = isVisible => {
      isVisible && setPortfolioVisibility(isVisible);
    }

    const contactChange = isVisible => {
      isVisible && setContactVisibility(isVisible);
    }

    return (
      // <div className={classes.container} onScroll={executeScroll}>
        <Grid container
              direction = "column"
              justify="space-around"
         
              className={classes.container}
        >
          <Grid item xs={12} className={classes.child}>
            <Welcome refProp={welcomeRef} id='Welcome'/>
          </Grid>
          <Grid item xs={12} className={classes.child}>
            <VisibilitySensor  partialVisibility minTopValue={450} delayedCall onChange={aboutChange}>
              <About refProp={aboutRef} isVisible={isAboutVisible} id='About'/>
            </VisibilitySensor> 
          </Grid>
          <Grid item xs={12} className={classes.child}>
            <VisibilitySensor  partialVisibility minTopValue={450} delayedCall onChange={portfolioChange}>
              <Portfolio refProp={portfolioRef} isVisible={isPortfolioVisible} id='Portfolio'/>
            </VisibilitySensor>
          </Grid>
          <Grid item xs={12} className={classes.child}>
            <VisibilitySensor partialVisibility minTopValue={450} delayedCall onChange={contactChange}>
              <Contact refProp={contactRef} isVisible={isContactVisible} id='Contact'/>
            </VisibilitySensor>
          </Grid>
        </Grid>
    );
};

export default Home;
