import React, { Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import AUTH from '../../utils/AUTH';
import Profile from '../Profile/profile';
import './Login.css';
import BackgroundSlideshow from 'react-background-slideshow';


import image1 from './assets/bike.jpg';
import image2 from './assets/code.jpg';
import image3 from './assets/jump.jpg';
import image4 from './assets/look2.jpg';
import image5 from './assets/run.jpg';
import image6 from './assets/yoga.jpg';



class Login extends Component {

    constructor() {
        super();
        
            this.state = {
                username: '',
                password: '',
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
            console.log('handleSubmit');
            this.props.login(this.state.username, this.state.password);
            this.setState({
                redirectTo: '/'
            });
        }

    render() {

        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {

        return(
            
            <div className="zindex1"> 
              
                <form className="box zindex1" action="/profile" component={Profile} method="post" >
                <h1 className="goaltitle zindex1">Login</h1>
                    <input type="text"
                        name="username" 
                        placeholder="Username"  
                        value={this.state.username}
                        onChange={this.handleChange}>
                    </input>
                <br></br>

                    <input type="password" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                    </input>
                <br></br>

                    <button className="button" onClick={this.handleSubmit}>Login</button>
                   
                <br></br>
                
                <Link to="/signup">New? Register!</Link>
            </form>
            <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} />
            </div>
        
        )
    }
}
}

export default Login;