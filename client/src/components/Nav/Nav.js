import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation} from 'react-mdl';
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
    <div className="demo-big-content">
      <Layout className="mdl-layout__content"> 
          <Header className="header-color" title="Motivate Me" scroll>
          <div><img  className="logo" src={MMlogo2} alt="avatar-placeholder"></img></div>
          <Navigation>
          {/* <Link to="/">Home</Link> */}
          <Link to="/profile">Profile</Link>
          <Link to="/addquote">My Goals</Link>
          <Link to="/quotes">My Quotes</Link>
              <div className="float-right">
                    {greeting}&emsp;&emsp;  
                  <a href="/" className="logout" style={{color:"white"}} onClick={props.logout}>Logout</a>
              </div>
          </Navigation>
        </Header>

        </Layout>
     </div>

  )
};

export default Nav;