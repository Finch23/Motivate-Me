import React, { Component } from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Checkbox } from 'react-mdl';
import './component-styles/profile-card.css';
class QuotesList extends Component {
    render() {
        
        return(
            <List style={{width: '300px'}}>
                <ListItem>
                    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
                    <ListItemAction>
                    <Checkbox defaultChecked />
                    </ListItemAction>
                </ListItem>
            </List>
        )
            
            
    }
}

export default QuotesList;