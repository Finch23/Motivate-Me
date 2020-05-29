import React, { Component } from 'react';
import {} from 'react-mdl'
import './component-styles/profile-card.css'
import ProfileCard from './profileCard';
import GoalsList from './goalsList';
import SearchQuotes from './searchQuotes';
import QuotesList from './quotesList';

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