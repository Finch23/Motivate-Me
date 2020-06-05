import React, { Fragment, Component } from 'react';
import '../pages/Profile/Profile.css';
import createAvatarComponent from 'react-avatar/es/avatar';
import GithubSource from 'react-avatar/es/sources/Github';

const Avatar = createAvatarComponent({
    sources: [ GithubSource ]
});

class ProfileCard extends Component {
    render() {
        console.log(this.props.user);
        
        return(
            <div className="profile-grid" class="row">
                <div class="col-6 demo-grid-2">
                    <div class="profile-card">
                        <div class="top-section">
                            <i class="message fas fa-envelope"></i>
                            <i class="notif fas fa-bell"></i>
                        <div class="pic">
                           <Avatar githubHandle={this.props.user.githubHandle} size={150} round="20px" />
                        </div>
                        <div class="name">Profile</div>
                        <div class="tag">@github</div>
                        </div>
                
                        <div class="bottom-section">
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
