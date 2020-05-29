import React, { Component } from 'react';
import "./modal.css";

class GoalsModal extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
              <div className="Modal">{this.props.children}</div>
             
            </div>
          );
    }
}
export default GoalsModal;