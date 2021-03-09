import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Dashboard from "./components/dashboard/Dashboard";
import Insurers from "./components/insurers/insurers";
import Brand from "./components/brand/brand";

// consts
import { Routes } from "./routes/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={Routes.dashboard.route} exact component={Dashboard} />
          <Route path={Routes.brands.route} exact component={Brand} />
          <Route path={Routes.insurers.route} exact component={Insurers} />
        </Switch>
      </Router>
    );
  }
}

export default App;
