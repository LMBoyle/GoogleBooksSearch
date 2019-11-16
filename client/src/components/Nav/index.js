// Imports ========================================================================================

import React from "react";
import "./style.css"

// Functions ======================================================================================

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <a href="/" className="navbar-brand navbar-dark"> Google Books Search </a>
      <a href="/"> <i class="fas fa-search"></i> </a>
      <a href="/books"> <i class="fas fa-book"></i> </a>
    </nav>
  );
}

// Export =========================================================================================

export default Nav;
