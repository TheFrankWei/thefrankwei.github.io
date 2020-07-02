import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import VisibilitySensor from "react-visibility-sensor";

export const useStyles = makeStyles(theme => ({
    container:{

    },
}));


const Home = () => {
    const classes = useStyles();
    // const [isVisible, setVisibility] = useState(false);
    const [isAboutVisible, setAboutVisibility] = useState(false);
    const [isPortfolioVisible, setPortfolioVisibility] = useState(false);
    const [isContactVisible, setContactVisibility] = useState(false);

    // const onChange =  visiblity => {
    //   visiblity && setVisibility(visiblity);
    // };

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
      <div className={classes.container}>
      
        <Welcome/>
        <VisibilitySensor delayedCall onChange={aboutChange}>
          <About isVisible={isAboutVisible}/>
        </VisibilitySensor> 
        <VisibilitySensor delayedCall onChange={portfolioChange}>
          <Portfolio isVisible={isPortfolioVisible}/>
        </VisibilitySensor>
        <VisibilitySensor delayedCall onChange={contactChange}>
          <Contact isVisible={isContactVisible}/>
        </VisibilitySensor>
      </div>
    );
};

export default Home;
