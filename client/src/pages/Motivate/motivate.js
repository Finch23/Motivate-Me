import React, { Component } from 'react';
import "./Motivate.css";
import "../AUTH/Login.css"
import Profile from '../Profile/profile';



class Motivate extends Component {
    
      render() {
        return (
          <div>
              <form className="box motivate" action="/profile" method="post">
                <h1 className="goaltitle">My New Goal</h1>
                    <input className="input-text" type="text" name="title" placeholder="Title of your new goal"></input>
                <br></br>
                    <textarea className="textarea" type="text" name="details" placeholder="List your details"></textarea>
                <br></br>
                    <input className="input-text" type="submit" name="" value="Submit New Goal"></input>
                <br></br>
            </form>
            
          </div>
        );
      }
    }
    
   
export default Motivate;
