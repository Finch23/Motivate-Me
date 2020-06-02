import axios from "axios";

export default {

  // --------GOALS--------------
  // Gets all goals
  getGoals: function(username) {
    return axios.get(`/api/goals/username/${username}`);
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the goal with the given id
  deleteGoal: function(id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a goal to the database
  saveGoal: function(goalData) {
    return axios.post("/api/goals", goalData);
  },
  
  // --------Quotes(FROM API)--------------
  // Gets all quotes from API using search query
  getApiQuotes: function(query) {
    console.log("API Query: " + query);
    return axios.get("/api/apiquotes", { params: { q: query } });
  },

   
   // --------FAVORITE QUOTES-------------
  // Gets all favorite quotes
  getFaves: function(username) {
    return axios.get(`/api/faves/username/${username}`);
  },
  // Gets the favorite quote with the given id
  getFave: function(id) {
    return axios.get("/api/faves/" + id);
  },
  // Deletes the favorite quote with the given id
  deleteFave: function(id) {
    return axios.delete("/api/faves/" + id);
  },
  // Saves a favorite quote to the database
  saveFave: function(quoteData) {
    console.log(quoteData);
    return axios.post("/api/faves", quoteData);
  }

};