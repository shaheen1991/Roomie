import axios from "axios";

export default {
  // Gets all books
  getChores: function() {
    return axios.get("/api/chores");
  },
  saveChores: function(choreData) {
    console.log(choreData);
    return axios.post("/api/chores", choreData);
    
  }
};
