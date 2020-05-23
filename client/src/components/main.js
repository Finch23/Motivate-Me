import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from './contact';
import Landing from './landing';
import Motivate from './motivate';
import Profile from './profile';


const Main = () => (
    <Switch> 
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/motivate" component={Motivate} />
        <Route path="/profile" component={Profile} />
    </Switch>
)

export default Main;