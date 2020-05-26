import React, { Component } from 'react';
import Profile from './profile';
import './component-styles/login.css';

class Landing extends Component {
    render() {
        return(
            <form class="box" action="/profile" component={Profile} method="post">
                <h1>Login</h1>
                    <input type="text" name="" placeholder="Username"></input>
                <br></br>
                    <input type="password" name="" placeholder="Password"></input>
                <br></br>
                    <input type="submit" name="" value="GO!"></input>
                <br></br>
            </form>
        )
    }
}

export default Landing;