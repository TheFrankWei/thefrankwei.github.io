import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
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
        <Grid container
              direction = "column"
        >
          <Grid item>
            <Welcome/>
          </Grid>
          <Grid item>
            <VisibilitySensor  partialVisibility minTopValue={450} delayedCall onChange={aboutChange}>
              <About isVisible={isAboutVisible}/>
            </VisibilitySensor> 
          </Grid>
          <Grid item>
            <VisibilitySensor  partialVisibility minTopValue={450} delayedCall onChange={portfolioChange}>
              <Portfolio isVisible={isPortfolioVisible}/>
            </VisibilitySensor>
          </Grid>
          <Grid item>
            <VisibilitySensor partialVisibility minTopValue={450} delayedCall onChange={contactChange}>
              <Contact isVisible={isContactVisible}/>
            </VisibilitySensor>
          </Grid>
        </Grid>
      </div>
    );
};

export default Home;
