// Imports ========================================================================================

import React, { Component } from "react";

// Components
import BookStack from "../components/BookStack"
import DeleteBtn from "../components/DeleteBtn";

// Other
import API from "../utils/API";

// Functions ======================================================================================

class Books extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };


  // Select a random number
  randomColor() {
    const color = ["#CBA00F", "#E5901E", "#DF5F07", "#5AB4EB", "#BBCD56"];

    let num = Math.floor(Math.random() * Math.floor(color.length));

    return(color[num])
  }

  // Select a random width
  randomMargin() {
    // Find a number between 15 & 30
    // Then add % to the end to make it a percent
    let num = Math.floor(Math.random() * (30 - 15)) + 15 + '%';

    return(num)
  }

  handleDelete = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

  // Render page
  render() {
    console.log("books ", this.state.books)
    return (
      <BookStack>
        <h1> Saved Book Stack </h1>
      
        {this.state.books.length ? (
          <>
            {this.state.books.map((book, i) => (
              <div
                style={{
                  backgroundColor: `${this.randomColor()}`,
                  marginLeft: `${this.randomMargin()}`
                }}
                className="book"
                key={i}
              >
                <DeleteBtn 
                  onClick={() => this.handleDelete(book._id)}
                />
                <p className="bookTitle"> {book.title} </p>
                <p> By </p>
                <p className="bookAuthor"> {book.author} </p>
              </div>
            ))}
          </>
          ) : (
            <h1> No Results to Display </h1>
          )}
      </BookStack>
    );
  };
}

// Export =========================================================================================

export default Books;
