// Imports ========================================================================================

import React from "react";
import "./style.css"

// Functions ======================================================================================

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <a href="/" className="navbar-brand navbar-dark"> Google Books Search </a>
      <a href="/"> <i className="fas fa-search"></i> </a>
      <a href="/books"> <i className="fas fa-book"></i> </a>
    </nav>
  );
}

// Export =========================================================================================

export default Nav;
