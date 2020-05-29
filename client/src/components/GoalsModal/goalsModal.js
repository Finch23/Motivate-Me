import React, { Component } from 'react';

class GoalsModal extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
              <div className="modal">{this.props.children}</div>
             
            </div>
          );
    }
}
export default GoalsModal;