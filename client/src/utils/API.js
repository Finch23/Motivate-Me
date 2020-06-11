import axios from "axios";

export default {

  // --------GOALS--------------
  // Gets all goals
  getGoals: function(username) {
    return axios.get(`/api/goal/username/${username}`);
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    return axios.get("/api/goal/" + id);
  },
  // Deletes the goal with the given id
  deleteGoal: function(id) {
    return axios.delete("/api/goal/" + id);
  },
  // Saves a goal to the database
  saveGoal: function(goalData) {
    return axios.post("/api/goal", goalData);
  },

  // Updates goals with the given id
  updateGoal: function(id, goalData) {
    return axios.put("/api/goal/" + id, goalData);
  },

   // --------FAVORITE VIDEOS-------------
  //  These will be used for future development for favorite videos.

  // Gets all favorite Videos
  getFaves: function(username) {
    return axios.get(`/api/faves/username/${username}`);
  },
  // Gets the favorite video with the given id
  getFave: function(id) {
    return axios.get("/api/faves/" + id);
  },
  // Deletes the favorite video with the given id
  deleteFave: function(id) {
    return axios.delete("/api/faves/" + id);
  },
  // Saves a favorite video to the database
  saveFave: function(quoteData) {
    console.log(quoteData);
    return axios.post("/api/faves", quoteData);
  }

};