import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Footer, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import './App.css';


class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Motivate Me" scroll>
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/motivate">My Quotes</Link>
            <Link to="/support">Support Group</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title="Motivate Me">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/motivate">My Quotes</Link>
                <Link to="/support">Support Group</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

        <div className="footer-links">
        <Footer className="footer-color">

        <Link to="/contact"  style={{ color: "white", textDecoration: 'none' }}>Contact Us</Link>
            {/* Name of link */}
            <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

         {/* Name of Link */}
        <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github-square" aria-hidden="true"  />
        </a>
        </Footer>
        </div>
      
    </Layout>
</div>
    );
  }
}

export default App;