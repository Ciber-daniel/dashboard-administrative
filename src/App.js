import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brand from "./components/brand/brand";
// components
import Dashboard from "./components/dashboard/Dashboard";

// consts
import { Routes } from "./routes/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={Routes.dashboard.route} exact component={Dashboard} />
          <Route path={Routes.brands.route} exact component={Brand} />
        </Switch>
      </Router>
    );
  }
}

export default App;
