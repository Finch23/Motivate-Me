import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../Profile/Profile.css'
import ProfileCard from '../../components/profileCard';
import GoalsList from '../../components/goalsList';

class Profile extends Component {
    
    render() { 
        return(
            <div>
                <Grid>
                    <Cell col={5}>
                    <div className="profileCard"> <ProfileCard user={this.props.user}/> </div>
                    </Cell>
                         
                    <Cell col={7}> <div> <GoalsList/> </div> 
                    </Cell>
                </Grid>
            </div>     
        )            
    }
}
export default Profile;