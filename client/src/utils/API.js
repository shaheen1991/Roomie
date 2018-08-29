import axios from "axios";

export default {
  // Gets all books
  getSmacks: function() {
    return axios.get("/api/smack");
  },
  // Gets the book with the given id
//   getSmacks: function(id) {
//     return axios.get("/api/smack/" + id);
//   },
  // Deletes the book with the given id
  deleteSmacks: function(id) {
    return axios.delete("/api/smack/" + id);
  },
  // Saves a book to the database
  saveSmacks: function(smackData) {
    return axios.post("/api/smack", smackData)
  },






  // Chore API 
  getChores: function() {
    return axios.get("/api/chores");
  },

  saveChores: function(choreData) {
    console.log(choreData);
    return axios.post("/api/chores", choreData);
  },

  deleteChore: function(id) {
    return axios.delete("/api/chores/" + id);
  }
};
