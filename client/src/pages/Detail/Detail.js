import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Cell } from 'react-mdl';
import API from "../../utils/API";
import '../Motivate/Motivate.css';
import '../../App.css';
import '../AUTH/Login.css';
class Detail extends Component {
  state = {
    Goal: {},
    title: "",
    details: "",
  };

  // When this component mounts, grab the recipe with the _id of this.props.match.params.id
  componentDidMount() {
    this.loadGoals();
  }

  loadGoals = () => {
    console.log (this.props)
    API.getGoal(this.props.match.params.id)
      .then(res => this.setState({ Goal: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.title || this.state.details) {
      API.updateGoal(this.state.Goal._id, {
        title: this.state.title || this.state.Goal.title, 
        details: this.state.details || this.state.Goal.details,
      })
        .then(res => this.loadGoals())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
              <h1 align="center" className="details-title">
                {this.state.Goal.title}
              </h1>
          </Cell>
        </Grid>

        <Grid>
            {/* left side, goal details */}
            
            <Cell className="dynamicgoalsList" col={6}>
                <article>
                  <h4 align="center"><strong>Details</strong></h4>
                  <hr></hr>
                  <h4 align="center">
                  {this.state.Goal.details}
                  </h4>
                </article>
              <hr></hr>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/newgoal">← Back to Personal Goals</Link>
            </Cell>
            
            {/* right side, update goal section */}
          <Cell col={6}>
            <div>
              <form className="box motivate" action="/newgoal" method="post">
                <h1 align="center" className="goaltitle">Update Your Goal</h1>
               
                <input 
                  type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder={this.state.Goal.title}
                  inputvalue="">
                 </input>

                 <br></br>
                
                 <textarea className="textarea"
                  type="text"
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder={this.state.Goal.details}
                  inputvalue="">
                </textarea>

                <br></br>

                <button className="updateBTN"
                    onClick={this.handleFormSubmit}>
                    Update Goal
                </button>

                </form>
                </div>
          </Cell>
        </Grid>

        </div>
    );
  }
}

export default Detail;