import React from 'react';
import LiftSpotter from './LiftSpotter/LiftSpotter';
import QRFound from './QRFound/QRFound';
import SoundByte from './SoundByte/SoundByte';
import LittleEinstein from './LittleEinstein/LittleEinstein';

/*
  {
    title: string
    description: string
    link: [
      {
        desc: '[Link: | Github: | Info: | Default:]',
        link: 'href',
      }
    ]
  }
*/


const PortfolioItems = [
  {
    title: 'To Do List',
    description: 'A To-do list made with React/CSS/HTML',
    links: [
      {
        desc: 'Link:',
        link: 'https://thefrankwei.github.io/todo-list' 
      },
      {
        desc: 'Github:',
        link: "https://github.com/TheFrankWei/todo-list",
      }
    ],
  },
  {
    title: 'Deliveries.dev',
    description: ' Web-app to track your packages!',
    links:[
      {
        desc: 'Link:',
        link: 'https://www.deliveries.dev/' 
      },
      {
        desc: 'Github:',
        link: "https://github.com/TheFrankWei/mailtracker",
      }
    ],
  },
  {
  title: 'LiftSpotter',
  description: 'JavaScript Webapp allowing you to record Workouts',
  links:[
    {
      desc: 'Info:',
      component: (<LiftSpotter/>) 
    },
    {
      desc: 'Github:',
      link: "https://github.com/TheFrankWei/LiftSpotter",
    }
  ],
}, {
    title: 'QRFound',
    description: 'Javascript Webapp helping you find your stuff!',
    links:[
      {
        desc: 'Info:',
        component: (<QRFound/>) 
      },
      {
        desc: 'Github:',
        link: "https://github.com/TheFrankWei/QRFound",
      }
    ],
},
  {
    title: 'SoundByte',
    description:'UX Design Project for Microsoft Challenge',
    links:[
      {
        desc: 'Info:',
        component: (<SoundByte/>) 
      },
      {
        desc: 'Invision:',
        link: "https://projects.invisionapp.com/share/ZQHWMH78S4N#/screens/293059953",
      }
    ],
}, {
    title: 'Little Einstein',
    description: 'UI/UX for a toy store',
    links:[
      {
        desc: 'Info:',
        component: (<LittleEinstein/>) 
      },
    ]
}, {
    title: 'Photography',
    description: `Pictures I've taken and edited!`,
    links:[
      {
        desc: 'Info:',
        component: (<SoundByte/>) 
      },
      {
        desc: 'Flickr:',
        link: "https://www.flickr.com/photos/144760780@N08/?",
      }
    ]
}];

export default PortfolioItems;