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
        .then(data => {
          console.log("added book");
          console.log(data)
        })
        .catch(err => console.log(err));
    }
  };


function SaveBtn(props) {
    console.log("btn props ", props)
    return (
      <button 
        onClick={() => saveBook(props.title, props.author, props.synopsis)} 
        className="btn btn-success"
      > <i class="fas fa-bookmark"></i> </button>
    );
  }

// Export =========================================================================================

export default SaveBtn;
