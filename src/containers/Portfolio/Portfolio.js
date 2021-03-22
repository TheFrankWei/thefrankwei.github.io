import React, { useRef }  from 'react';
import PortfolioItem from './../../components/PortfolioItem/PortfolioItem.js';
import PortfolioItems from './PortfolioItems.js';
import Letter from './../../components/Letter/Letter.js';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import { makeStyles, Grid } from '@material-ui/core';
import Glitch from '../../components/Glitch/Glitch.js';
export const useStyles = makeStyles(theme => ({
  portfolio: {
    [theme.breakpoints.up('md')]: {
      // 'min-height': '80vh',
    },
    [theme.breakpoints.down('md')]: {
      // 'min-height': '160vh',
    },
  },
  gridBreak:{
    [theme.breakpoints.up('md')]: {
      minHeight:'20vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight:'80vh',
    },
  },
  portfolioTitleWrapper:{
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  portfolioAnimationSpace: {
    //empty div so that animations will work on smaller breakpoints
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      minHeight: '20px',
      minWidth: '40px',
      paddingLeft: '5%',
    },
  },

  portfolio_title:{
    display:'block',
    textAlign: 'left',
  },
  
  contentGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    flexWrap:'wrap',
  },
}));


const Portfolio = ({refProp, isVisible, id}) => {
  const classes = useStyles();
  const portfolioTitleRef = useRef();
  const portfolioTitleAnimation = useSpring({opacity: isVisible? 1 : 0, marginLeft: isVisible? 0 : 300,
                            ref: portfolioTitleRef,
                            delay: 300,
                            from: {opacity: 0, marginLeft: 300,}})
  
  const portfolioItemRef = useRef();
  const portfolioItemAnimation = useTrail(PortfolioItems.length, {
                                  ref: portfolioItemRef,
                                  delay: 500,
                                  opacity: isVisible? 1 : 0 ,
                                  from: { opacity: 0 }, 
                                })


  useChain([portfolioTitleRef, portfolioItemRef], [0, 0.5])
  
  

  return (
   <Grid container direction="column" ref={refProp} className={classes.portfolio} id={id}>
     <Grid item xs={12} className={classes.gridBreak}></Grid>
     <Grid item xs={12} className={classes.portfolioTitleWrapper}>
      <Grid item className={classes.portfolioAnimationSpace}/>
      <animated.h1 style={portfolioTitleAnimation} className = {classes.portfolio_title}>
        <Letter value="P"/>
        <Letter value="O"/>
        <Letter value="R"/>
        <Letter value="T"/>
        <Letter value="F"/>
        <Letter value="O"/>
        <Letter value="L"/>
        <Letter value="I"/>
        <Letter value="O"/>
      </animated.h1>
      </Grid>
     <Grid item className={classes.contentGrid}>
      {isVisible && portfolioItemAnimation.map(({...rest}, index) => (
        <animated.div style={{...rest}}>
          <PortfolioItem className={classes.portfolioItem} title={PortfolioItems[index].title} description={PortfolioItems[index].description} icons={PortfolioItems[index].icon} links={PortfolioItems[index].links} key={index} />
        </animated.div>  
        ))}
     </Grid>


   </Grid>
 );

}
export default Portfolio;
