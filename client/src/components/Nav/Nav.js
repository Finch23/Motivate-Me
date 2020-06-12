import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// import { Grid } from "@material-ui/core";
import {  Header, Navigation, Drawer } from 'react-mdl';
import MMlogo2 from '../../pages/AUTH/assets/MMlogo2.png';
import './Nav.css';



const Nav = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello Guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment  >
				Welcome, <strong>{props.user.firstName}</strong>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome, <strong>{props.user.username} </strong>
			</Fragment>
		)
  }
  
  return (
    <div style={{height: '100px'}}>
          <Header style={{ width:"100vw" }} className="header-color" title="Motivate Me" scroll>
          <div><img  className="logo" src={MMlogo2} alt="avatar-placeholder"></img></div>
            <Navigation >
              <Link to="/profile">Profile</Link>
              <Link to="/newgoal">My Goals</Link>
              <Link to="/quotes">My Videos</Link>
              <Link to="/contact">About</Link>
                <div className="float-right">
                    {greeting}&emsp;&emsp;  
                  <Link to="/" className="logout" style={{color:"white"}} onClick={props.logout}>Logout</Link>
                </div>
           </Navigation>
        </Header>
        <Drawer className="header-color" title="Motivate Me">
            <Navigation>
              <Link to="/profile">Profile</Link>
              <Link to="/newgoal">My Goals</Link>
              <Link to="/quotes">My Videos</Link>
              <Link to="/contact">About</Link>
              <Link to="/" className="logout" style={{color:"white"}} onClick={props.logout}>Logout</Link>
            </Navigation>
        </Drawer>
     </div>

  )
};

export default Nav;