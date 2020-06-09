import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';
import '../Motivate/Motivate.css';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from './assets/bike.jpg';
import image2 from './assets/code.jpg';
import image3 from './assets/jump.jpg';
import image4 from './assets/look2.jpg';
import image5 from './assets/run.jpg';
import image6 from './assets/yoga.jpg';

function Login({login}) {
  const [userObject, setUserObject] = useState({
    username: '',
    password: ''
  });
  const [redirectTo, setRedirectTo] = useState(null);

	const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
    };
    
    const handleSubmit = (event) => {
		event.preventDefault();
		login(userObject.username, userObject.password);
		setRedirectTo('/profile');
    };
    
    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
      } else {
        return (

            <div className="zindex1"> 

<form className="box zindex1" action="/profile" method="post" >
                <h1 className="goaltitle zindex1">Login</h1>

                <input 
                        type="text"
                        name="username" 
                        placeholder="Username"  
                        value={userObject.username}
                        onChange={handleChange}>
                    </input>
                <br></br>

                <input
                         type="password" 
                        name="password" 
                        placeholder="Password"
                        value={userObject.password}
                        onChange={handleChange}>
                    </input>
                <br></br>

                <button className="loginBTN" onClick={handleSubmit}>Login</button>

                <br></br>

                
                <Link to="/signup">New? Register</Link>

              </form>

              <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} />
            </div>

        )
    }
}
export default Login;