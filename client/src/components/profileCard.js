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
                                {/* This is the div for avatars */}
                                <div class="pic">
                                    <Avatar skypeId="sitebase" alt="avatar-placeholder">
                                </div>
                                
                                <div class="name"> Profile</div>
                                <div class="tag">@github</div>
                                </div>

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