import React, { Component } from 'react';
import {List, Textfield} from 'react-mdl';
import '../pages/Profile/Profile.css';
class SearchQuotes extends Component {
    render() {
        
        return(
            <div>
                <Textfield
                    onChange={() => {}}
                    label="Expandable Input"
                    expandable
                    expandableIcon="search"
                />
            </div>
        )
            
            
    }
}

export default SearchQuotes;