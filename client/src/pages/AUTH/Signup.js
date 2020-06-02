import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AUTH from '../../utils/AUTH';

import BackgroundSlideshow from 'react-background-slideshow';


import image1 from './assets/bike.jpg';
import image2 from './assets/code.jpg';
import image3 from './assets/jump.jpg';
import image4 from './assets/look2.jpg';
import image5 from './assets/run.jpg';
import image6 from './assets/yoga.jpg';


class Signup extends Component {

	constructor() {
    super();
    
		this.state = {
      firstName: '',
      lastName: '',
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		};
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
		AUTH.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log('Confirmed');
        this.setState({
          redirectTo: '/'
        });
      } else {
        console.log('duplicate');
      }
    });
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (
      <div className="login">
          <form className="box zindex1" action="/profile"  method="post">
                <h1 className="goaltitle">Register for Motivate Me!</h1>
               
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}>
                </input>
          
                
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}>                      
                </input>                

                
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}>
                </input>

                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}>
                  </input>

                
                
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}>
                  </input>
              
                <br></br>
                <button className="input-text" onClick={this.handleSubmit}>Register</button>
                <br></br>
                <Link to="/">Login</Link>
              </form>
              <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} />
      </div>
		)
	}
}

export default Signup;