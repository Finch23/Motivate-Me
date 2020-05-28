import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile';
import './component-styles/login.css';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../components/assets/bike.jpg';
import image2 from '../components/assets/code.jpg';
import image3 from '../components/assets/jump.jpg';
import image4 from '../components/assets/look2.jpg';
import image5 from '../components/assets/run.jpg';
import image6 from '../components/assets/yoga.jpg';



class Landing extends Component {

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
        return(
            <div className="zindex1"> 
              
                <form className="box zindex1" action="/profile" component={Profile} method="post">
                <h1 className="goaltitle zindex1">Login</h1>
                    <input type="text" name="" placeholder="Username"></input>
                <br></br>
                    <input type="password" name="" placeholder="Password"></input>
                <br></br>
                    <input type="submit" name="" value="GO!"></input>
                <br></br>
                <Link to="/signup">New? Register!</Link>
            </form>
            <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} />
            </div>
        
        )
    }
}

export default Landing;