import React, { Component } from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';
import './component-styles/profile-card.css';
class GoalsList extends Component {
    render() {
        
        return(
            <List>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
                    <ListItemAction info="Actor">
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem twoLine>
                    <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
                    <ListItemAction>
                    <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
            </List>
        )
            
            
    }
}

export default GoalsList;