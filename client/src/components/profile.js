import React, { Component } from 'react';
import { List, ListItem, ListItemAction, ListItemContent, Icon  } from 'react-mdl';
import './component-styles/profile-card.css'
import './component-styles/goals.css'


class Profile extends Component {
    render() {
        
        return(

            <div class="container" col={12}>
                <div class="row-1">
                   <div class="profile-card" col={4} style={{overflow: 'hidden', textAlign: 'center', alignItems: 'center', boxShadow: ' 0 0 10px #00000070', width: '600px', float:'left'}}>
                        <div class="top-section">
                            <i class="message fas fa-envelope"></i>
                            <i class="notif fas fa-bell"></i>
                            <div class="pic">
                                <img src="pic.png" alt=""></img>
                            </div>
                            <div class="name">Profile</div>
                            <div class="tag">@github</div>
                        </div>

                        <div class="bottom-section">
                            <div class="social-media">
                                <a href="https://www.google.com"><i class="material-icons">add</i></a>
                                <a href="https://www.google.com"><i class="material-icons">list</i></a>
                                <a href="https://www.google.com"><i class="material-icons">done_all</i></a>
                            </div>
                
                            <div class="videos">90<span>Add Goals!</span></div>
                            <div class="border"></div>
                            <div class="subscribers">204<span>Completed</span></div>
                            <div class="border"></div>
                            <div class="views">7.3M <span>Completed</span></div>
                        </div>
                    </div> 
                </div>
                

                <div class="row-2">
                    <div>
                        <List style={{width: '300px'}}>
                            <ListItem twoLine>
                                <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
                                <ListItemAction info="Actor">
                                <a href="https://www.google.com"><Icon name="star" /></a>
                                </ListItemAction>
                            </ListItem>
                            <ListItem twoLine>
                                <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
                                <ListItemAction>
                                <a href="https://www.google.com"><Icon name="star" /></a>
                                </ListItemAction>
                            </ListItem>
                            <ListItem twoLine>
                                <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
                                <ListItemAction>
                                <a href="https://www.google.com"><Icon name="star" /></a>
                                </ListItemAction>
                            </ListItem>
                        </List>
                    </div>
                </div>                   
            </div>

            
                
                
            
            
        )
    }
}

export default Profile;