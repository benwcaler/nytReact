import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-couter-dom";
import Search from ".pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () => {
  <Router>
    <div>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
}

export default App;
