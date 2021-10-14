import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import ModalButton from '../Modal/ModalButton';
import Glitch from './../Glitch/Glitch';
export const useStyles = makeStyles(theme => ({
  portfolioItem:{
    backgroundColor: '#557282',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.25s',
    // boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 2px 1px -2px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '2rem',

    width: '12rem',
    margin: '1rem 1rem',
    height: 200,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Fira Sans', sans-serif`,
    textAlign: 'center',
    '&:hover ':{
      backgroundColor: '#5B7B8C',
      // boxShadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
      boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.4)',
    },
  },

  portfolioItemTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '10%',
  },

  portfolioItemDesc : {
    fontSize: 12,
    padding: 5,
    minHeight:'3.2em',
  },

  portfolioItemDivider:{
    width: '90%',
    borderTop: '1px solid #bbb',
    borderRadius: '1px',
  },

  portfolioItemLinks : {
    display: 'inline',
    justifyContent: 'space-around',
    width: '100%',
    fontSize:'0.8em',
  },
}));

const iconSize = {
  fontSize: '2.4em',
  color: 'rgba(255, 255, 255, 0.8)',
  marginTop: '0.1em',
  };  


const PortfolioItem = (props) => {
  const {
   title, description, links
  } = props;
  const classes = useStyles();


  const linkRenderer = (item) => {
      switch(item.desc){
        case 'Link:':
          return(
            <a target="_blank" rel="noopener noreferrer" href ={item.link}><LaunchIcon style={iconSize} /></a>
          );
        case 'Github:':
            return(
            <a target="_blank" rel="noopener noreferrer" href ={item.link}><GitHubIcon style={iconSize} /></a>
          );
        case 'Info:':
          return(
           <ModalButton page={item.component}><InfoIcon style={iconSize}/></ModalButton>
          );
        default:
          return(
            <a target="_blank" rel="noopener noreferrer" href={item.link}><LaunchIcon style={iconSize}/></a>
          );
      }
  }

    return (
        <div className={classes.portfolioItem}>

          <div className={classes.portfolioItemTitle}>
            {title}
          </div>

          <div className={classes.portfolioItemDesc}>
            {description}
          </div>

          <hr className={classes.portfolioItemDivider}/>

          <div className={classes.portfolioItemLinks}>
            <Grid container direction='row' alignItems='center' justify='space-evenly'>
              {links.length>0 && links.map((item) =>
              <Grid item>
              <div>{item.desc}</div>
              <span>{linkRenderer(item)}</span>
              </Grid>
              )}
            </Grid>
          </div>
        </div>
     
    );
};

export default PortfolioItem;
