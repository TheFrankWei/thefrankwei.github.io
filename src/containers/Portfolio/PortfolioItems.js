import React from 'react';
import {Link} from 'react-router-dom';
import GitHub from './../../images/github.svg';
import Article from './../../images/article.svg'
import Wireframe from './../../images/wireframe.svg';
import Flickr from './../../images/flickr.svg'

export default [{
  title: 'LiftSpotter',
  description: 'JavaScript Webapp allowing you to record Workouts',
  links:(
    <div>
      <span><Link to='/Portfolio/LiftSpotter'><img src={Article} alt='read more'/></Link></span>
      <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/LiftSpotter"><img src={GitHub} alt='Github Link'/></a></span>
    </div>)
  // render: (
  //   <div style={{backgroundColor:'#557282'}} className='portfolioItem'>
  //     <div className='PortfolioItem__title'>
  //       LiftSpotter
  //     </div>
  //     <div className='PortfolioItem__desc'>
  //       JavaScript Webapp allowing you to record Workouts
  //     </div>
  //     <div className='PortfolioItem__icon'>
  //       <i className="Javascript"></i>
  //       <i className="fab fa-npm"></i>
  //     </div>
  //     <div className='PortfolioItem__links'>
  //     <div><Link to='/Portfolio/LiftSpotter'><img src={Article} alt='read more'/></Link></div>
  //     <div><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/LiftSpotter"><img src={GitHub} alt='Github Link'/></a></div>
  //     </div>
  //   </div>
  // )
}, {
    title: 'QRFound',
    description: 'Javascript Webapp helping you find your stuff!',
    links:(
      <div>
        <span><Link to='/Portfolio/QRFound'><img src={Article} alt='read more'/></Link></span>
        <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/QRFound"><img src={GitHub} alt='Github Link'/></a></span>
      </div>),
}, {
    title: 'OnePlaylist',
    description: ' AWS Webapp for one big playlist! (WIP)',
    links:(
      <div>
        <span><Link to='/Portfolio/OnePlaylist'><img src={Article} alt='read more'/></Link></span>
      </div>),
  },
  {
    title: 'SoundByte',
    description:'UX Design Project for Microsoft Challenge',
    links:(
      <div>
        <span><Link to='/Portfolio/SoundByte'><img src={Article} alt='read more'/></Link></span>
        <span><a target="_blank" rel="noopener noreferrer" href="https://projects.invisionapp.com/share/ZQHWMH78S4N#/screens/293059953"><img src={Wireframe} alt='Invision Link'/></a></span>
      </div>
    )
}, {
    title: 'Little Einstein',
    description: 'UI/UX for a toy store',
    links:(
      <div>
        <span><Link to='/Portfolio/LittleEinstein'><img src={Article} alt='read more'/></Link></span>
      </div>
    )
}, {
    title: 'Photography',
    description: `Pictures I've taken and edited!`,
    links: (
      <div>
        <span><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/144760780@N08/?"><img src={Flickr} alt='Flickr Link'/></a></span>
      </div>
    )
}];
