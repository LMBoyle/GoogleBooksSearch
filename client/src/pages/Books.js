// Imports ========================================================================================

import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// Components
import BookStack from "../components/BookStack"

// Other

// Functions ======================================================================================

class Books extends Component {
  
  state = {
    
  }

  // Select a random number
  randomColor() {
    const color = ["red", "orange", "yellow", "green", "blue"];

    let num = Math.floor(Math.random() * Math.floor(color.length));

    return(color[num])
  }

  // Select a random width
  randomWidth() {
    // Find a number between 60 & 100 
    // Then add % to the end to make it a percent
    let num = Math.floor(Math.random() * 60) + 40 + '%';

    return(num)
  }

  // Select a random width
  randomMargin() {
    // Find a number between -30 & 30 
    // Then add % to the end to make it a percent
    let num = Math.floor(Math.random() * 60) - 30 + '%';

    return(num)
  }

  // Render page
  render() {
    return (
      <>
      <BookStack>
        <h1> Your Book Stack </h1>
      
        <div 
          style={{
            backgroundColor: `${this.randomColor()}`,
            width: `${this.randomWidth()}`,
            marginLeft: `${this.randomMargin()}`
          }}
          className="book"
        > Book One </div>

        <div 
          style={{
            backgroundColor: `${this.randomColor()}`,
            width: `${this.randomWidth()}`,
            marginLeft: `${this.randomMargin()}`
          }}
          className="book"
        > Book Two </div>

        <div 
          style={{
            backgroundColor: `${this.randomColor()}`,
            width: `${this.randomWidth()}`,
            marginLeft: `${this.randomMargin()}`
          }}
          className="book"
        > Book Three </div>

        <div 
          style={{
            backgroundColor: `${this.randomColor()}`,
            width: `${this.randomWidth()}`,
            marginLeft: `${this.randomMargin()}`
          }}
          className="book"
        > Book Four </div>

      </BookStack>
      </>
    );
  };
}

// Export =========================================================================================

export default Books;
