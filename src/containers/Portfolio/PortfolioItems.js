import React from 'react';
import ModalButton from '../../components/Modal/ModalButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

import Grid from '@material-ui/core/Grid';


import LiftSpotter from './LiftSpotter/LiftSpotter';
import QRFound from './QRFound/QRFound';
import SoundByte from './SoundByte/SoundByte';
import LittleEinstein from './LittleEinstein/LittleEinstein';

const PortfolioItems = [
  {
    title: 'To Do List',
    description: 'A To-do list made with React/CSS/HTML',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Link:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://thefrankwei.github.io/todo-list"><LaunchIcon/></a></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/todo-list"><GitHubIcon/></a></span>
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
          <span><a target="_blank" rel="noopener noreferrer" href = "https://www.deliveries.dev/"><LaunchIcon/></a></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/mailtracker"><GitHubIcon/></a></span>
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
      {/* <span><Link to='/Portfolio/LiftSpotter'><InfoIcon/></Link></span> */}
      <span><ModalButton page={<LiftSpotter/>}><InfoIcon/></ModalButton></span>
      </Grid>
      <Grid item>
      <div>Github:</div>
      <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/LiftSpotter"><GitHubIcon/></a></span>
      </Grid>
    </Grid>)
}, {
    title: 'QRFound',
    description: 'Javascript Webapp helping you find your stuff!',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Info:</div>
          <span><ModalButton page={<QRFound/>}><InfoIcon/></ModalButton></span>
        </Grid>
        <Grid item>
          <div>Github:</div>
          <span><a target="_blank" rel="noopener noreferrer" href = "https://github.com/TheFrankWei/QRFound"><GitHubIcon/></a></span>
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
//         <span><Link to='/Portfolio/OnePlaylist'><InfoIcon/></Link></span>
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
          <span><ModalButton page={<SoundByte/>}><InfoIcon/></ModalButton></span>
        </Grid>
        <Grid item>
          <div>Invision:</div>
          <span><a target="_blank" rel="noopener noreferrer" href="https://projects.invisionapp.com/share/ZQHWMH78S4N#/screens/293059953"><OpenInBrowserIcon/></a></span>
        </Grid>
      </Grid>)
}, {
    title: 'Little Einstein',
    description: 'UI/UX for a toy store',
    links:(
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
        <div>Info:</div>
        <span><ModalButton page={<LittleEinstein/>}><InfoIcon/></ModalButton></span>
        </Grid>
      </Grid>)
}, {
    title: 'Photography',
    description: `Pictures I've taken and edited!`,
    links: (
      <Grid container direction='row' alignItems='center' justify='space-evenly'>
        <Grid item>
          <div>Flickr:</div>
          {/* <span><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/144760780@N08/?"><img src={Flickr} alt='Flickr Link'/></a></span> */}
          <span><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/144760780@N08/?"><OpenInBrowserIcon/></a></span>
        </Grid>
      </Grid>)
}];

export default PortfolioItems;