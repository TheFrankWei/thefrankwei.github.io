import React from 'react';
import Letter from './../../components/Letter/Letter.js';
import Portrait from './../../images/portrait.jpg';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  about:{
    height: '100vh',
  },
  about_title:{
    textAlign: 'left',
    paddingLeft: '20%',
    paddingTop:'3%',
    fontSize:'100',
  },
  portrait: {
    float:'left',
    marginLeft: 'auto',
    marginRight: 'auto',

    '& img' : {
      border: '30px solid #4FB99F',
      overflow: 'hidden',
      borderRadius: '50%',
      transition: '0.70s',
      verticalAlign: 'top',
      height: 'auto',
  
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
    fontSize: 20,
    width: '60%',
    paddingLeft: '5%',
  }
 
  
}));


const About = () => {
  const classes = useStyles();

    return (
      <div className = {classes.about} id='About'>
        <h1 className= {classes.about_title}>
            <Letter style={{fontSize: 100,}} value="A"/>
            <Letter style={{fontSize: 100,}} value="B"/>
            <Letter style={{fontSize: 100,}} value="O"/>
            <Letter style={{fontSize: 100,}} value="U"/>
            <Letter style={{fontSize: 100,}} value="T"/>
            </h1>

            <div className = {classes.bioWrapper}>

              <div className ={classes.portrait}>
                <img  src={Portrait} alt="this is me"/>
              </div>

              <div className = {classes.bio}>
                <p>Thanks for visiting my website! My name is Frank Wei and I currently live in New York City. I love coding, designing, and combining the two to make awesome creations.</p>
                <br/><p>I built this site from scratch, taking design inspiration other cool sites as well as learning React along the way (Take a look at the code <a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/thefrankwei.github.io">here</a>). When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
                <br/><p>In this site, you can browse through my portfolio of design, projects and photography. Hope you enjoy!</p>
                <br/><p>(PS: please excuse the current non-responsive design -- I am currently in the process of rebuilding this site, check back for updates!)</p>
              </div>


            </div>
      </div>
    );

}

export default About;
