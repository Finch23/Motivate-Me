import React, { Component } from 'react';
import {List, Textfield} from 'react-mdl';
import './component-styles/profile-card.css';
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