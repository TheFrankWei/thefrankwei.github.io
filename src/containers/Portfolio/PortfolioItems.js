import React from 'react';
import {Link} from 'react-router-dom';
import GitHub from './../../images/github.svg';
import Article from './../../images/article.svg'
import Wireframe from './../../images/wireframe.svg';
import Flickr from './../../images/flickr.svg'


export default [{
  name: 'typy',
  render: (
    <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
      <div className='PortfolioItem__title'>
        LiftSpotter
      </div>
      <div className='PortfolioItem__desc'>
        JavaScript Webapp allowing you to record Workouts
      </div>
      <div className='PortfolioItem__icon'>
        <i className="Javascript"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='PortfolioItem__links'>
      <div><Link to='/Portfolio/LiftSpotter'><img src={Article} alt='read more'/></Link></div>
      <div><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/LiftSpotter"><img src={GitHub} alt='Github Link'/></a></div>
      </div>
    </div>
  )
},{
  name: 'typy',
  render: (
    <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
      <div className='PortfolioItem__title'>
        QRFound
      </div>
      <div className='PortfolioItem__desc'>
        Javascript Webapp helping you find your stuff!
      </div>
      <div className='PortfolioItem__icon'>
        <i className="Javascript"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='PortfolioItem__links'>
        <div><Link to='/Portfolio/QRFound'><img src={Article} alt='read more'/></Link></div>
        <div><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/QRFound"><img src={GitHub} alt='Github Link'/></a></div>
      </div>
    </div>
    )
  },{
    name: 'typy',
    render: (
      <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          OnePlaylist
        </div>
        <div className='PortfolioItem__desc'>
          AWS Webapp for one big playlist! (WIP)
        </div>
        <div className='PortfolioItem__icon'>
          <i className="Javascript"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
          <div><Link to='/Portfolio/OnePlaylist'><img src={Article} alt='read more'/></Link></div>
        </div>
      </div>
      )
    }, {
    name: 'typy',
    render: (
      <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          SoundByte
        </div>
        <div className='PortfolioItem__desc'>
          UX Design Project for Microsoft Challenge
        </div>
        <div className='PortfolioItem__icon'>
          <i className="Javascript"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
          <div><Link to='/Portfolio/SoundByte'><img src={Article} alt='read more'/></Link></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://projects.invisionapp.com/share/ZQHWMH78S4N#/screens/293059953"><img src={Wireframe} alt='Invision Link'/></a></div>
        </div>
      </div>
    )
  },{
    name: 'typy',
    render: (
      <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          Little Einstein
        </div>
        <div className='PortfolioItem__desc'>
          UI/UX for a toy store
        </div>
        <div className='PortfolioItem__icon'>
          <i className="fab fa-js"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
        <div><Link to='/Portfolio/LittleEinstein'><img src={Article} alt='read more'/></Link></div>
        </div>
      </div>
    )
  },{
    name: 'typy',
    render: (
      <div style={{backgroundColor:'#557282'}} className='PortfolioItem'>
        <div className='PortfolioItem__title'>
          Photography
        </div>
        <div className='PortfolioItem__desc'>
          Pictures I've taken and edited!
        </div>
        <div className='PortfolioItem__icon'>
          <i className="fab fa-js"></i>
          <i className="fab fa-npm"></i>
        </div>
        <div className='PortfolioItem__links'>
          <div><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/144760780@N08/?"><img src={Flickr} alt='Flickr Link'/></a></div>
        </div>
      </div>
    )
  }];
