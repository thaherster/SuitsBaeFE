import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import NavBar from "../dashboard/NavBar";

import undraw_selfie from "../../../images/undraw_selfie.svg";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", errors: {} };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const oldUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(oldUser);
    this.props.loginUser(oldUser);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <NavBar />
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
                  onSubmit={this.onSubmit}
                  autoComplete="new-password"
                  role="presentation"
                  className="form"
                >
                  <div>
                    {errors.email && (
                      <small className="error ">{errors.email}</small>
                    )}
                    <br />
                    {errors.password && (
                      <small className="error ">{errors.password}</small>
                    )}
                  </div>
                  <input name="email" className="fakefield" />
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="you@example.com"
                    onChange={this.onChange}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    autoComplete="off"
                    onChange={this.onChange}
                  />
                  <button type="submit" className="button button__accent">
                    Log in
                  </button>
                  <a href="">
                    <h6 className="left-align">Forgot your password?</h6>
                  </a>
                  <a href="">
                    <h6 className="left-align">Sign Up</h6>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStatetoProps,
  { loginUser }
)(Login);
