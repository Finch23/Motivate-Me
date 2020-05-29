import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AUTH from '../../utils/AUTH';
import Profile from '../Profile/profile';

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
		// TODO - validate!
		AUTH.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log('youre good');
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
          <form className="box" action="/profile" component={Profile} method="post">
                <h1 className="goaltitle">Register for Motivate Me!</h1>
                <label htmlFor="username">First name: </label>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}>
                </input>
          
                <label htmlFor="username">Last name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}>                      
                </input>                

                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}>
                </input>

                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}>
                  </input>

                
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}>
                  </input>
              
                <br></br>
                <button onClick={this.handleSubmit}>Register</button>
                <br></br>
                <Link to="/">Login</Link>
              </form>

      </div>
		)
	}
}

export default Signup;