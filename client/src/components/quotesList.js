import React, { Component } from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Checkbox } from 'react-mdl';
import '../pages/Profile/Profile.css';
class QuotesList extends Component {
    render() {
        
        return(
            <div>
            <h3 className="DevName" align="center">Quotes</h3>
<           hr></hr>
            <h4 align="center"> No quotes to display</h4>
            {/* <List style={{width: '300px'}}>
                <ListItem>
                    <ListItemContent avatar="">No Quotes to Display</ListItemContent>
                    <ListItemAction>
                    <Checkbox defaultChecked />
                    </ListItemAction>
                </ListItem>
            </List> */}
            </div>
        )
            
            
    }
}

export default QuotesList;