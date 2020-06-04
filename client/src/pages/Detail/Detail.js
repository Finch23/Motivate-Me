import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Cell } from 'react-mdl';
import API from "../../utils/API";

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
    API.getGoals(this.props.match.params.id)
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
         // If there are empty fields, use values stored in state rather than clearing field
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
              <h1>
                {this.state.Goal.title}
              </h1>
          </Cell>
        </Grid>


        <Grid> 
          {/* left side */}
          <Cell col={6}>
          {/* row 1 */}
          <Grid>
          <Cell col={10}>
            <article>
              <h1>Goals</h1>
              <p>
              {this.state.Goals.details}
              </p>
            </article>
            </Cell>
          </Grid>
          {/* row 2 */}
          <Grid>
          <Cell col={10}>
          <article>
              <h1>Goals</h1>
              {/* Using <pre> instead of <p> will render user-inputted line breaks and formatting */}
              <pre>
              {this.state.Goals.details}
              </pre>
            </article>
          </Cell>
          </Grid>

          {/* row 3 */}
        <Grid>
            <Cell col={2}>    </Cell>
            <Cell col={8}>
            <Link to="/goal">← Back to Personal Goals</Link>
            </Cell>
        </Grid>
          </Cell>

          {/* right side */}
          <Cell col={6}>
              <form>
                <input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder={this.state.Goal.title}
                  inputvalue="">
                 </input>

                <input
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder={this.state.Goals.details}
                  inputvalue="">
                </input>
                </form>

                <form>
                    <button
                    onClick={this.handleFormSubmit}>
                    Update Goal
                    </button>
                </form>

          </Cell>
        </Grid>

        </div>
    );
  }
}

export default Detail;