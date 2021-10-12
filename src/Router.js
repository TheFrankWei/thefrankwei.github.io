import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from './containers/Home.js';

const Router = () => (
    <Switch>
        <Route path='/' component = {Home} />
    </Switch>
);

export default Router;