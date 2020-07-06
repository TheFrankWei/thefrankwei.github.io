import React from 'react';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  portfolioItem:{
    backgroundColor: '#557282',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.25s',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 2px 1px -2px rgba(0, 0, 0, 0.2)',
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
      boxShadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
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
    '& span':{
      display: 'inline-block',
    },
    '& img': {
      marginTop: '10%',
      width: '30px',
    },
  },
}));

const PortfolioItem = (props) => {
  const classes = useStyles();

    return (
      <div className={classes.portfolioItem}>

        <div className={classes.portfolioItemTitle}>
          {props.title}
        </div>

        <div className={classes.portfolioItemDesc}>
          {props.description}
        </div>

        <div className={classes.portfolioItemIcon}>
          {props.icons}
        </div>
        <hr className={classes.portfolioItemDivider}/>
        <div className={classes.portfolioItemLinks}>
          {props.links}
        </div>

      </div>
    );
};

export default PortfolioItem;
