import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import NavBar from "../dashboard/NavBar";

import undraw_selfie from "../../../images/undraw_selfie.svg";

class Register extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "", errors: {} };

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
    this.setState({ errors: {} });
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
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
                <h1 className="auth__title">Get started in seconds</h1>
                <p>
                  Select an avatar & Fill in your email and password to proceed
                </p>
                <form
                  onSubmit={this.onSubmit}
                  autocompelete="off"
                  role="presentation"
                  className="form"
                >
                  <div>
                    {errors.name && (
                      <small className=" error ">{errors.name}</small>
                    )}
                    <br />
                    {errors.email && (
                      <small className="error ">{errors.email}</small>
                    )}
                    <br />
                    {errors.password && (
                      <small className="error ">{errors.password}</small>
                    )}
                  </div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    placeholder="Your Name"
                    onChange={this.onChange}
                  />

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
                    autocomplete="off"
                    onChange={this.onChange}
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
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStatetoProps,
  { registerUser }
)(withRouter(Register));
