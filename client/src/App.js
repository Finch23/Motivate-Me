import React, { Component } from 'react';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Login from '../src/pages/AUTH/Login';
import Signup from '../src/pages/AUTH/Signup';
import Nav from './components/Nav/Nav';
import Contact from './pages/Contact/contact';
import Videos from './components/Videos';
import Profile from './pages/Profile';
import Detail from './pages/Detail/Detail';
import NewGoal from './pages/Motivate/newgoal';
import AUTH from './utils/AUTH';
import { Layout} from 'react-mdl';


class App extends Component {
  
	constructor() {
	  super();
	  
		  this.state = {
			  loggedIn: false,
			  user: null
	  };
	}
	
	  componentDidMount() {
		  AUTH.getUser().then(response => {
			  console.log(response.data);
			  if (!!response.data.user) {
				  this.setState({
					  loggedIn: true,
					  user: response.data.user
				  });
			  } else {
				  this.setState({
					  loggedIn: false,
					  user: null
				  });
			  }
		  });
	  }
  
	  logout = (event) => {
	  event.preventDefault();
	  
		  AUTH.logout().then(response => {
			  console.log('successfully logged out!');
			  console.log(response.status);
			  if (response.status === 200) {
				  this.setState({
					  loggedIn: false,
					  user: null
				  });
			  }
  
		  });
	  }
  
	  login = (username, password) => {
		  AUTH.login(username, password).then(response => {
		console.log(response);
		if (response.status === 200) {
		  // update the state
		  this.setState({
			loggedIn: true,
			user: response.data.user
		  });
		}
	  });
	  }
  
	  render() {
		  return (
			<Layout>
				<div className="mdl-layout__content">
					{ this.state.loggedIn && (
		 				 <div>
							<Nav className="header-color" user={this.state.user} logout={this.logout}/>
								<div>
							 	 <Switch>
								 	<Route exact path="/" component={() => <Profile user={this.state.user}/>} />
									<Route exact path="/profile" component={() => <Profile user={this.state.user}/>} />
								  	<Route exact path="/quotes" component={(props) => <Videos user={this.state.user} {...props}/>} />
								  	<Route exact path="/goal/:id" component={(props) => <Detail user={this.state.user} {...props}/>} />

								  	<Route exact path="/newgoal" component={() => <NewGoal user={this.state.user}/>} />
								  	<Route path="/contact" component={Contact} />
							  	</Switch>

			  					{/* <div className="footer-links">
				  					<Footer className="footer-color">
					  					<Link to="/contact"  style={{ color: "white", textDecoration: 'none' }}>About the Developers</Link>
				  					</Footer>
			  					</div> */}
			  
							</div>
					</div>
				)}
				{ !this.state.loggedIn && (
		  		<div>
					<Route exact path="/" component={() => <Login login={this.login}/>} />
					<Route exact path="/profile" component={() => <Login login={this.login}/>} />
					<Route exact path="/signup" component={Signup} />
		  		</div>
				)}
			</div>
		</Layout>
		)
	}
}

export default App;