import React, {useState, useRef, useEffect} from 'react';
import { makeStyles, withWidth,} from '@material-ui/core';
import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import VisibilitySensor from "react-visibility-sensor";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import {useHistory} from 'react-router-dom';

export const useStyles = makeStyles(theme => ({
    child:{
      // scrollSnapAlign: 'start',
      // scrollSnapStop: 'always',
      // minHeight:'100vh',
    },
    contact:{
      pointerEvents: 'none',
    },
}));

const Home = ({width}) => {
    const classes = useStyles();
    const history = useHistory();
    let parallax = useRef();
    const welcomeRef = useRef();
    const aboutRef = useRef();
    const portfolioRef = useRef();
    const contactRef = useRef();

    const [isAboutVisible, setAboutVisibility] = useState(false);
    const [isPortfolioVisible, setPortfolioVisibility] = useState(false);
    const [isContactVisible, setContactVisibility] = useState(false);
    const [innerWindow, setWindow] = useState({width: 0, height: 0});

    const refArray = [welcomeRef, aboutRef, portfolioRef, contactRef];

    useEffect(()=>{
      window.addEventListener('resize', updateWindowDimensions)
    },[window])

    let updateWindowDimensions = () => {
      setWindow({width: window.innerWidth, height: window.innerHeight})
    }

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

      <React.Fragment>
      <Parallax pages={isMediumScreen? 5.7: 2.6} ref={ref => (parallax = ref)} >
          
          <ParallaxLayer offset={0} factor={1} speed={0} id='Home' onScroll={e => e.stopPropagation()}>
            <Welcome refProp={welcomeRef} />
          </ParallaxLayer>
          
          <ParallaxLayer offset={isMediumScreen? 1: 0.8} factor={1.4} speed={0.4} id='About' onScroll={e => e.stopPropagation()}>
            <VisibilitySensor  partialVisibility minTopValue={250} delayedCall onChange={aboutChange} >
              <About refProp={aboutRef} isVisible={isAboutVisible} />
            </VisibilitySensor>
          </ParallaxLayer>
 
          <ParallaxLayer offset={isMediumScreen? 2.2 : 1.2} factor={1.5} speed={0.5} id='Portfolio' onScroll={e => e.stopPropagation()}>
            <VisibilitySensor  partialVisibility minTopValue={225} delayedCall onChange={portfolioChange}>
              <Portfolio refProp={portfolioRef} isVisible={isPortfolioVisible} />
            </VisibilitySensor>
          </ParallaxLayer>
          
          <ParallaxLayer offset={isMediumScreen? 3 : 1.9} factor={1.5} speed={0.5} id='Contact' className={classes.contact} onScroll={e => e.stopPropagation()}>
            <VisibilitySensor partialVisibility minTopValue={250} delayedCall onChange={contactChange}>
              <Contact refProp={contactRef} isVisible={isContactVisible} />
            </VisibilitySensor>
          </ParallaxLayer>

        </Parallax>

       
        </React.Fragment>
    );
};

export default withWidth()(Home);
