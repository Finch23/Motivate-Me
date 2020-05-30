import React, { Component } from 'react';
import '../pages/Profile/Profile.css';
class SearchQuotes extends Component {
    render() {
        
        return(
            
            <div>
                <h3 className="DevName" align="center"> Search for Quotes</h3>
                <hr></hr>
               <input className="findquote" type="text" placeholder="Motivate me in..." name="Quote" ></input>
               <button className="button" onClick={this.handleSubmit}> Search! </button>
               <br></br>
               <br></br>
            </div> 
        )        
    }
}

export default SearchQuotes;