// Imports ========================================================================================

import React from "react";
import { Container } from "../Grid";


// Functions ======================================================================================

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Container>
        <a href="#" className="navbar-brand navbar-dark"> Google Books Search </a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search For A Book" aria-label="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit"> Search </button>
        </form>
      </Container>
    </nav>
  );
}

// Export =========================================================================================

export default Nav;
