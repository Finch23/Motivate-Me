import React, { Component } from 'react';
import GoalsModal from '../../components/GoalsModal';
import "./Motivate.css";
import Profile from '../Profile/profile';



class Motivate extends Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      render() {
        return (
          <div className="App">
            <button
              className="toggle-button"
              id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
            >
              {" "}
              Add New{" "}
            </button>
    
            <GoalsModal onClose={this.showModal} show={this.state.show}>
            
              <form className="box" action="/profile" component={Profile} method="post">
                <h1 className="goaltitle">My New Goal</h1>
                    <input className="input-text" type="text" name="" placeholder="Title of your new goal"></input>
                <br></br>
                    <input className="input-text"type="text" name="" placeholder="List your details"></input>
                <br></br>
                    <input className="input-text" type="submit" name="" value="Submit New Goal"></input>
                <br></br>
            </form>
            </GoalsModal>
          </div>
        );
      }
    }
    
   
export default Motivate;
