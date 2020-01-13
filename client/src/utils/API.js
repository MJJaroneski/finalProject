import axios from "axios";

export default {
  // Gets all books
  getArtists: function() {
    return axios.get("/routes/artists");
  },
  // Gets the book with the given id
  getArtist: function(id) {
    return axios.get("/routes/artists" + id);
  }
  
};