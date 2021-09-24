import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from './containers/Home.js';
import QRFound from './containers/Portfolio/QRFound/QRFound.js';
import LiftSpotter from './containers/Portfolio/LiftSpotter/LiftSpotter.js';
import SoundByte from './containers/Portfolio/SoundByte/SoundByte.js';
import LittleEinstein from './containers/Portfolio/LittleEinstein/LittleEinstein.js';
import OnePlaylist from './containers/Portfolio/OnePlaylist/OnePlaylist.js';

const Router = () => (
    <Switch>
        <Route path='/Portfolio/QRFound' exact component={QRFound}/>
        <Route path='/Portfolio/LiftSpotter' exact component={LiftSpotter}/>
        <Route path='/Portfolio/SoundByte' exact component={SoundByte}/>
        <Route path='/Portfolio/LittleEinstein' exact component={LittleEinstein}/>
        <Route path='/Portfolio/OnePlaylist' exact component={OnePlaylist}/>
        <Route path='/' component = {Home} />
    </Switch>
);

export default Router;