import React, { Component } from 'react';
import {} from 'react-mdl'
import '../Profile/Profile.css'
import ProfileCard from '../../components/profileCard';
import GoalsList from '../../components/goalsList';
import SearchQuotes from '../../components/searchQuotes';
import QuotesList from '../../components/quotesList';

class Profile extends Component {
    render() {
        
        return(
            <div className="container">
                <div className="row-1">
                    <div className="profileCard">
                        <ProfileCard/>
                    </div>
                
                    <div className="goalsList">
                        <GoalsList/>
                    </div>
                
                </div>

                <div className="row-2">
                    <div className="quotesSearch">
                        <SearchQuotes/>
                    </div>

                    <div className="quotesList">
                        <QuotesList/>
                    </div>
                </div>
            </div>
        )
            
            
    }
}

export default Profile;