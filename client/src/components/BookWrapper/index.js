// Imports ========================================================================================

import React from "react";
import "./style.css";

// Functions ======================================================================================

function BookWrapper(props) {
  return (
    <div className="booksWrapper row">
      {props.children}
    </div>
  );
}

// Export =========================================================================================

export default BookWrapper;
