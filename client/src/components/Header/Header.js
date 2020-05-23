import React from "react";
import { Link} from "react-router-dom";
import "./Header.css";

function Header(){
 
const handleToggle=  () => {
    var x = document.getElementById("navFixed");
    if (x.className.indexOf("show") === -1 && x.className.indexOf("hide-small") === 0) {
        x.className = x.className.replace("hide-small", " show");
    } else {
        x.className = x.className.replace(" show", "hide-small");
    }
}
  return(
    <>
    
    <div className="nav-top">
      
      <div id="navbar">
        <button id ="navLink" className="button hide-md-lg" onClick={handleToggle} title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </button>
        <Link to="/login" className="navbar-item button hide-small">LOGIN</Link>
        <Link to="/profile" className="navbar-item button hide-small"><i className="fa"></i> PROFILE</Link>
        <Link to="/motiavtion" className="navbar-item button hide-small"><i className="fa"></i> MOTIVATION</Link>
        <Link to="/contact" className="navbar-item button hide-small"><i className="fa"></i> CONTACT</Link>

      </div>

      {/*  Header Small */}
      <div id="navFixed" className="hide-small hide-large hide-medium" onClick={handleToggle}>
        <Link to="/login" className="navbar-item small button">LOGIN</Link>
        <Link to="/profile" className="navbar-item small buttonl"><i className="fa"></i> PROFILE</Link>
        <Link to="/motiavtion" className="navbar-item small button"><i className="fa"></i> MOTIVATION</Link>
        <Link to="/contact" className="navbar-item small buttonl"><i className="fa"></i> CONTACT</Link>
      </div>
    </div>
    </>

  )
}

export default Header;