import React from 'react';
import { Route, } from 'react-router-dom';
import Home from './containers/Home.js';

const Router = () => (
        <Route path='/' component = {Home} />
);

export default Router;