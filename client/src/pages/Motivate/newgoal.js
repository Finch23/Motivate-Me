import React, { Component } from "react";
import '../../App.css';
import '../Motivate/Motivate.css';
import { Grid, Cell, List, ListItem} from 'react-mdl';
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
 
 
class NewGoal extends Component {
  state = {
    title: "",
    name: "",
    details: "",
    username: ""
  };
 
  componentDidMount() {
    this.loadGoals();
  }
 
  loadGoals = () => {
    API.getGoals(this.props.user.username)
      .then(res => {
        console.log(res); 
        this.setState({ Goal: res.data, title: "", details: "" })
      })
      .catch (err => console.log(err));
  };
 
 
  deleteGoal = id => {
    API.deleteGoal(id)
      .then(res => this.loadGoals())
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
 
    if (this.state.title && this.state.details ) {
      console.log(this.props)
      API.saveGoal({
        title: this.state.title, 
        details: this.state.details,
        username: this.props.user.username
      })
        .then(res => this.loadGoals())
        .catch(err => console.log(err));
    }
  };
 
  render() {
    return (
        <div>
                <Grid className="new-goal-grid">
                    <Cell col={6}>
                    <div className="profileCard"> 
                         <form className="box motivate" action="/newgoal" method="post">
                            <h1 className="goaltitle">My New Goal</h1>
 
                            <input className="input-text" 
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title" 
                                type="text"  
                                placeholder="Title of your new goal"
                                inputvalue="">
                            </input>
 
                                <br></br>
 
                            <textarea className="textarea" 
                                value={this.state.details}
                                onChange={this.handleInputChange}
                                type="text" 
                                name="details"
                                placeholder="List your details"
                                inputvalue="">
                             </textarea>
 
                                <br></br>
 
                            <input className="input-text" 
                                type="submit"
                                value="Submit New Goal"
                                disabled={!(this.state.title)}
                                onClick={this.handleFormSubmit}
                            ></input>
 
                                <br></br>
                        </form>
                    </div>
                    </Cell>
 
                 
                    <Cell col={6}> 
 
                    <div className="goalsList"> 
                        <h3 align="center" className="DevName">Saved Goals</h3>
                        <hr></hr>
                        {this.state.Goal ? (
                  <List>
                    { this.state.Goal && this.state.Goal.map(Goal => {
                      return (
                        <ListItem key={Goal._id}>
                          <a href={"/goal/" + Goal._id}>
                            <strong>
                              {Goal.title}
                            </strong>
                          </a>
                          &nbsp;
                          <DeleteBtn type="submit" onClick={() => this.deleteGoal(Goal._id)} />
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                  <h3>No Goals to Display</h3>
                )}
                    </div> 
                    </Cell>
 
                </Grid>
            </div>
     
        );
    }
}
 
export default NewGoal;
