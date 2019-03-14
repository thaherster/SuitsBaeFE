import React, { Component } from "react";
import undraw_selfie from "../../../images/undraw_selfie.svg";

class Login extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  render() {
    return (
      <div className="auth">
        <div className="container">
          <div className="auth__inner">
            <div className="auth__media">
              <img src={undraw_selfie} />
            </div>
            <div className="auth__auth">
              <h1 className="auth__title">Get started in seconds</h1>
              <p>
                Select an avatar & Fill in your email and password to proceed
              </p>
              <form
                method="post"
                action="/example"
                autocompelete="new-password"
                role="presentation"
                className="form"
              >
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  placeholder="Your Name"
                />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={this.state.email}
                  placeholder="you@example.com"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  autocomplete="off"
                />
                <button type="submit" className="button button__accent">
                  Create free account
                </button>
                <a href="">
                  <h6 className="left-align">I am an Existing User</h6>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
