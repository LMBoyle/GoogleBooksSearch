// Imports ========================================================================================

import React from "react";
import "./style.css";

// Functions ======================================================================================

function BookStack({ children }) {
  return (
    <div className="stack">
      {children}
    </div>
  );
}

// Export =========================================================================================

export default BookStack