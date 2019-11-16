// Imports ========================================================================================

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Books from "./pages/Books";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

// Components
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"

// Functions ======================================================================================

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper >
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/book" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

// Export =========================================================================================

export default App;
