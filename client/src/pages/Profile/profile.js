import React, { Component } from 'react';
import './Profile.css'
class Profile extends Component {
    render() {
        
        return(
            <div className="profile-grid zindex1" class="row">
                <div className="col s4 m4 l3 z index1">
                    <div className="profile-card zindex1">
                        <div className="top-section">
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
            </div>
            
            
            
        )
    }
}

export default Profile;