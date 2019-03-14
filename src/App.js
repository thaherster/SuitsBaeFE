import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/landing/Landing";
import Login from "./components/layout/auth/Login";
import Register from "./components/layout/auth/Register";
import Dashboard from "./components/layout/dashboard/Dashboard";
import NavBar from "./components/layout/dashboard/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
