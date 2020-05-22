import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Login  from './pages/Login/index';
import Profile from './pages/Profile/index';
import Motivation from './pages/Motivation/index';
import Contact from './pages/Contact/index';


import './App.css';

function App() {
  return (
    <div>
    <HashRouter>
        <Header />
          <Route exact path="/login" component={Login} />
         
          <Route exact path="/profile" component={Profile} />
         
          <Route exact path="/motivation" component={Motivation} />
         
          <Route exact path="/contact" component={Contact} />
          
        <Footer/>
   </HashRouter>
      </div>
  );
}

export default App;
