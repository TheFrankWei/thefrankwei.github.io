import React, {useState, useRef, useEffect, useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withWidth } from '@material-ui/core';
import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import VisibilitySensor from "react-visibility-sensor";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const useStyles = makeStyles(theme => ({
    child:{
      // scrollSnapAlign: 'start',
      // scrollSnapStop: 'always',
      // minHeight:'100vh',
    },
}));

const Home = ({width}) => {
    const classes = useStyles();

    let parallax = useRef();
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

    const isMediumScreen = /xs|sm|md/.test(width);

    return (
      // <div className={classes.container} onScroll={executeScroll}>
      <React.Fragment >
      <Parallax pages={isMediumScreen? 5 : 2.6} ref={ref => (parallax = ref)}>
        <Grid container
              direction = "column"
              justify="space-around"
              className={classes.container}
              id="Home"
        >
          
          
          <Grid item xs={12} className={classes.child}>
          <ParallaxLayer offset={0} speed={0}>
            <Welcome refProp={welcomeRef} id='Welcome'/>
            </ParallaxLayer>
          </Grid>
          
          
          
          <Grid item xs={12} className={classes.child}>
          <ParallaxLayer offset={isMediumScreen? 1: 0.8} speed={0.4}>
            <VisibilitySensor  partialVisibility minTopValue={250} delayedCall onChange={aboutChange}>
              <About refProp={aboutRef} isVisible={isAboutVisible} id='About'/>
            </VisibilitySensor>
            </ParallaxLayer>
 
          </Grid>
          
          
          <Grid item xs={12} className={classes.child}>
          <ParallaxLayer offset={isMediumScreen? 2.2 : 1.2} speed={0.5}>
            <VisibilitySensor  partialVisibility minTopValue={225} delayedCall onChange={portfolioChange}>
              <Portfolio refProp={portfolioRef} isVisible={isPortfolioVisible} id='Portfolio'/>
            </VisibilitySensor>
            </ParallaxLayer>
          </Grid>
          

          
          <Grid item xs={12} className={classes.child}>
          <ParallaxLayer offset={isMediumScreen? 3 : 1.9} speed={0.5}>
            <VisibilitySensor partialVisibility minTopValue={250} delayedCall onChange={contactChange}>
              <Contact refProp={contactRef} isVisible={isContactVisible} id='Contact'/>
            </VisibilitySensor>
            </ParallaxLayer>
          </Grid>
         
        </Grid>
        </Parallax>
        </React.Fragment>
    );
};

export default withWidth()(Home);
