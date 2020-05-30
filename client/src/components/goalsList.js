import React, { Component } from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';
import '../pages/Profile/Profile.css';
import Motivate from '../pages/Motivate/motivate';
class GoalsList extends Component {
    render() {
        
        return(
            <div>
                <h3 className="DevName" align="center">My Goals</h3>
                <hr></hr>
            <List>
                <ListItem twoLine>
                    <ListItemContent avatar="" >Look for a new job</ListItemContent>
                    <ListItemAction info="">
                    <a href="#"><Icon name="X" /></a>
                    </ListItemAction>
                </ListItem>

                <ListItem twoLine>
                    <ListItemContent avatar="" >Learn Python!</ListItemContent>
                    <ListItemAction info="">
                    <a href="#"><Icon name="X" /></a>
                    </ListItemAction>
                </ListItem>

                <ListItem twoLine>
                    <ListItemContent avatar="" >Study React on FreeCodeCamp</ListItemContent>
                    <ListItemAction info="">
                    <a href="#"><Icon name="X" /></a>
                    </ListItemAction>
                </ListItem>

                <ListItem twoLine>
                    <ListItemContent avatar="" >Exercise 4x a week</ListItemContent>
                    <ListItemAction info="">
                    <a href="#"><Icon name="X" /></a>
                    </ListItemAction>
                </ListItem>
                

                {/* Add a New Goal Modal */}
                <div>
                <Motivate/>
                 </div>
            </List>
            </div>

        )
            
            
    }
}

export default GoalsList;