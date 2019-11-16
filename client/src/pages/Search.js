// Imports ========================================================================================

import React, { Component } from "react";
// import { Link } from "react-router-dom";

// Components
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron"
import BookWrapper from "../components/BookWrapper"
import Results from "../components/Results"

// Other
import API from "../utils/API";

// Functions ======================================================================================

class Search extends Component {

  state = {
    searchTerm: "",
    books: [],
  }

  inputChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSearch = e => {
    e.preventDefault();
    console.log("Clicked Button!")
    console.log("Searching for... ", this.state.searchTerm)

    API.searchBooks(this.state.searchTerm)
      .then(res => {
        console.log(res)

        this.setState({
          books: res.data.items
        })

        console.log(this.state.books)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1> What Book Are You Looking For? </h1>

            <form>
              <Input
                name="searchTerm"
                placeholder="Search For A Book" 
                value={this.state.searchTerm}
                onChange={this.inputChange}
                style={{width:"50%", margin:"0 auto"}}
              />

              <FormBtn
                disabled={!(this.state.searchTerm)}
                onClick={this.handleSearch}
              >
                Submit
              </FormBtn>
            </form>
        </Jumbotron>
        </Row>

        <Row>
          <BookWrapper>
            {this.state.books.map(book => {
              return (
                <Results
                  key={book.id}
                  title={book.volumeInfo.title}
                  img={book.volumeInfo.imageLinks.thumbnail}
                  author={book.volumeInfo.authors[0]}
                  synopsis={book.volumeInfo.description}
                  date={book.volumeInfo.publishedDate}
                >
                </Results>
              )
            })}
          </BookWrapper>
        </Row>
      </Container>
    )
  }
}

// Export =========================================================================================

export default Search