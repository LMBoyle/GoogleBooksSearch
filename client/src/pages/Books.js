// Imports ========================================================================================

import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";

// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// Components
import BookStack from "../components/BookStack"

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
    const color = ["red", "orange", "yellow", "green", "blue"];

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

  // Render page
  render() {
    console.log(this.state)
    return (
      <BookStack>
        <h1> Saved Book Stack </h1>
      
        {this.state.books.length ? (
          <>
            {this.state.books.map(book => (
              <div
                style={{
                  backgroundColor: `${this.randomColor()}`,
                  marginLeft: `${this.randomMargin()}`
                }}
                className="book"
              >
                <p className="bookTitle"> {book.title} </p>
                <p> By </p>
                <p className="bookAuthor"> {book.author} </p>
              </div>
              // <DeleteBtn onClick={() => this.deleteBook(book._id)} />
            ))}
          </>
          ) : (
            <h3> No Results to Display </h3>
          )}
      </BookStack>
    );
  };
}

// Export =========================================================================================

export default Books;
