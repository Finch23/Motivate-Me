import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';
import '../pages/Profile/Profile.css';
// import Motivate from '../pages/Motivate/motivate';
class GoalsList extends Component {
    render() {
        
        return(
            <div className="goalsList">
                <h3 className="DevName" align="center">My Goals</h3>
                <hr></hr>
            <List>
                <ListItem twoLine>
                    <ListItemContent avatar="" >Look for a new job</ListItemContent>
                    <ListItemAction info="">
                    <a href="google.com"><Icon name="X" /></a>
                    </ListItemAction>
                </ListItem>
                

                <div>
                <form method="get" action="/addquote">
                    <button className="button" style={{float: "right", marginRight: "60px"}} type="submit">Add New Goal</button>
                </form>
                 </div>
            </List>
            </div>

        )
            
            
    }
}

export default GoalsList;