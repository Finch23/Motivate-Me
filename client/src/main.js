import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Motivate from './pages/Motivate';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


const Main = () => (
    <Switch> 
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/motivate" component={Motivate} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;