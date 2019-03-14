import React, { Component } from "react";
import undraw_selfie from "../../../images/undraw_selfie.svg";

class Login extends Component {
  render() {
    return (
      <div className="auth">
        <div className="container">
          <div className="auth__inner">
            <div className="auth__media">
              <img src={undraw_selfie} />
            </div>
            <div className="auth__auth">
              <h1 className="auth__title">Access your account</h1>
              <p>Fill in your email and password to proceed</p>
              <form
                method="post"
                action="/example"
                autocompelete="new-password"
                role="presentation"
                className="form"
              >
                <input name="email" className="fakefield" />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  autocomplete="off"
                />
                <button type="submit" className="button button__accent">
                  Log in
                </button>
                <a href="">
                  <h6 className="left-align">Forgot your password?</h6>
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
