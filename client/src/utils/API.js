// Imports ========================================================================================

import axios from "axios";

// Export =========================================================================================

export default {
  // Send request to google books to find searched book
  searchBooks: function(req, res) {
    console.log("API.js, running and sending axios")
    const googleURL = "https://www.googleapis.com/books/v1/volumes?"

    return axios.get(googleURL, { params: { q: req } })
  },
  
  // Send request to db for saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
