import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Insurers from "./pages/insurers/Insurers";
import Brand from "./pages/brand/Brand";
// consts
import { Routes } from "./consts/Routes-App";

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
