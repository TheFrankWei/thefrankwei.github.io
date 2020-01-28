import React from 'react';
import PortfolioItem from './../../components/PortfolioItem/PortfolioItem.js';
import PortfolioItems from './PortfolioItems.js';
import Letter from './../../components/Letter/Letter.js';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  portfolio: {
    height: '100vh',
  },
  portfolio_title:{
    marginLeft: 40,
    display:'block',
    textAlign: 'left',
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  contentGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    flexWrap:'wrap',
  },
  portfolioItem: {
    backgroundColor: '#557282',

   '&:hover':{
      backgroundColor: '5B7B8C',
    },
  }
}));


const Portfolio = () => {
  const classes = useStyles();
  return (
   <div className={classes.portfolio} id = "Portfolio">
      <h1 className = {classes.portfolio_title}>
        <Letter style={{fontSize: 100,}} value="P"/>
        <Letter style={{fontSize: 100,}} value="O"/>
        <Letter style={{fontSize: 100,}} value="R"/>
        <Letter style={{fontSize: 100,}} value="T"/>
        <Letter style={{fontSize: 100,}} value="F"/>
        <Letter style={{fontSize: 100,}} value="O"/>
        <Letter style={{fontSize: 100,}} value="L"/>
        <Letter style={{fontSize: 100,}} value="I"/>
        <Letter style={{fontSize: 100,}} value="O"/>
      </h1>
     <div className={classes.contentGrid}>
     {PortfolioItems.map((item, i) => (
           <PortfolioItem className={classes.portfolioItem} render={item.render} key={i} />
         ))}
     </div>


   </div>
 );

}
export default Portfolio;
