import React, { Fragment, Component } from 'react';
import '../pages/Profile/Profile.css';
import { createAvatarComponent, GithubSource } from 'react-avatar';

const Avatar = createAvatarComponent({
    sources: [ GithubSource ]
});

class ProfileCard extends Component {
    render() {
        
        return(
            <div className="profile-grid" class="row">
                <div class="col-6 demo-grid-2">
                    <div class="profile-card">
                        <div class="top-section">
                            <i class="message fas fa-envelope"></i>
                            <i class="notif fas fa-bell"></i>
                        <div class="pic">
                           <Avatar githubHandle={this.state.user.githubHandle} size={150} round="20px" />
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

                                {/* Bottom, white section of the profile card */}
                                <div class="bottom-section">
                                <   h3 align="center" className="DevName">What are you motivated to do today?</h3>

                                </div>
                    </div>
                </div>
            </div>
        </div>
        )
            
            
    }
}

export default ProfileCard;