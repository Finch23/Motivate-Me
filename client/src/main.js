import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/AUTH/Login';
import Signup from './pages/AUTH/Signup';
import Motivate from './pages/Motivate';
import Profile from './pages/Profile';



const Main = () => (
    <Switch> 
        <Route exact path="/" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/motivate" component={Motivate} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;