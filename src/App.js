import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthoken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/landing/Landing";
import Login from "./components/layout/auth/Login";
import Register from "./components/layout/auth/Register";
import Dashboard from "./components/layout/dashboard/Dashboard";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthoken(localStorage.jwtToken);
  // Deode token and get user info and expiration
  const decode = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated

  store.dispatch(setCurrentUser(decode));
  console.log("DECODED CODE");
  console.log(decode);

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //TODO :Clear current profie

    //Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
