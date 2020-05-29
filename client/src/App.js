import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Footer, Drawer, Content } from 'react-mdl';
import Main from './main';
import './App.css';
// import BackgroundSlideshow from 'react-background-slideshow';

// import image1 from './components/assets/bike.jpg';
// import image2 from './components/assets/code.jpg';
// import image3 from './components/assets/jump.jpg';
// import image4 from './components/assets/look2.jpg';
// import image5 from './components/assets/run.jpg';
// import image6 from './components/assets/yoga.jpg';

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
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title="Motivate Me">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/motivate">My Quotes</Link>
            </Navigation>
        </Drawer>

        <Content>
        {/* <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} /> */}
        <div className="page-content" />
            <Main/>
        </Content>

        <div className="footer-links">
        <Footer className="footer-color">

        <Link to="/contact"  style={{ color: "white", textDecoration: 'none' }}>Contact Us</Link>
            {/* Name of link */}
            <a href="#" target="_blank" rel="noopener noreferrer">
            </a>

            {/* Name of Link */}
            <a href="#" target="_blank" rel="noopener noreferrer">
            </a>

        </Footer>
        </div>
      
    </Layout>
</div>
    );
  }
}

export default App;