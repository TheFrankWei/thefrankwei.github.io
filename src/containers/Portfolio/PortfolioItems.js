import React from 'react';
import {Link} from 'react-router-dom';
import ModalButton from '../../components/Modal/ModalButton';

import externalLink from './../../images/externalLink.svg';
import GitHub from './../../images/github.svg';
import Article from './../../images/article.svg'
import Wireframe from './../../images/wireframe.svg';
import Flickr from './../../images/flickr.svg'
import Grid from '@material-ui/core/Grid';


import LiftSpotter from './LiftSpotter/LiftSpotter';
import QRFound from './QRFound/QRFound';
import SoundByte from './SoundByte/SoundByte';
import LittleEinstein from './LittleEinstein/LittleEinstein';

export default [
  {
    title: 'To Do List',
    description: 'A To-do list made with React/CSS/HTML',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Link:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://thefrankwei.github.io/todo-list"><img src={externalLink} alt='link to site'/></a></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/todo-list"><img src={GitHub} alt='Github Link'/></a></span>
        </Grid>
      </Grid>),
  },
  {
    title: 'Deliveries.dev',
    description: ' Web-app to track your packages!',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Link:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://www.deliveries.dev/"><img src={externalLink} alt='link to site'/></a></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/mailtracker"><img src={GitHub} alt='Github Link'/></a></span>
        </Grid>
      </Grid>),
  },
  {
  title: 'LiftSpotter',
  description: 'JavaScript Webapp allowing you to record Workouts',
  links:(
    <Grid container direction='row' alignItems='center' justify='space-evenly'>
      <Grid item>
        <div>Info:</div>
      {/* <span><Link to='/Portfolio/LiftSpotter'><img src={Article} alt='read more'/></Link></span> */}
      <span><ModalButton page={<LiftSpotter/>}><img src={Article} alt='read more'/></ModalButton></span>
      </Grid>
      <Grid item>
      <div>Github:</div>
      <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/LiftSpotter"><img src={GitHub} alt='Github Link'/></a></span>
      </Grid>
    </Grid>)
}, {
    title: 'QRFound',
    description: 'Javascript Webapp helping you find your stuff!',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Info:</div>
          <span><ModalButton page={<QRFound/>}><img src={Article} alt='read more'/></ModalButton></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/QRFound"><img src={GitHub} alt='Github Link'/></a></span>
        </Grid>
      </Grid>), 
},
// }, {
//     title: 'OnePlaylist',
//     description: ' AWS Webapp for one big playlist! (WIP)',
//     links:(
//       <Grid container direction='row' alignItems='center' justify='space-evenly'>
//         <Grid item>
//         <div>Info:</div>
//         <span><Link to='/Portfolio/OnePlaylist'><img src={Article} alt='read more'/></Link></span>
//         </Grid>
//       </Grid>),
//   },
  {
    title: 'SoundByte',
    description:'UX Design Project for Microsoft Challenge',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Info:</div>
          <span><ModalButton page={<SoundByte/>}><img src={Article} alt='read more'/></ModalButton></span>
        </Grid>
        <Grid item>
          <div>Invision:</div>
          <span><a target="_blank" rel="noopener noreferrer" href="https://projects.invisionapp.com/share/ZQHWMH78S4N#/screens/293059953"><img src={Wireframe} alt='Invision Link'/></a></span>
        </Grid>
      </Grid>)
}, {
    title: 'Little Einstein',
    description: 'UI/UX for a toy store',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
        <div>Info:</div>
        <span><ModalButton page={<LittleEinstein/>}><img src={Article} alt='read more'/></ModalButton></span>
        </Grid>
      </Grid>)
}, {
    title: 'Photography',
    description: `Pictures I've taken and edited!`,
    links: (
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Flickr:</div>
          <span><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/144760780@N08/?"><img src={Flickr} alt='Flickr Link'/></a></span>
        </Grid>
      </Grid>)
}];
