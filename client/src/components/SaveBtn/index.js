// Imports ========================================================================================

import React from "react";
import API from "../../utils/API";

// Functions ======================================================================================

function saveBook(title, author, synopsis) {

    if (title && author) {
      API.saveBook({
        title: title,
        author: author,
        synopsis: synopsis
      })
        .then(() => console.log("added book"))
        .catch(err => console.log(err));
    }
  };


function SaveBtn(props) {
    console.log("btn props ", props)
    return (
      <button 
        onClick={() => saveBook(props.title, props.author, props.synopsis)} 
      > Save Book </button>
    );
  }

// Export =========================================================================================

export default SaveBtn;