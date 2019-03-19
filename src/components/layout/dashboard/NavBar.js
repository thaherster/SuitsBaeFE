import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

class NavBar extends Component {
  constructor() {
    super();

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick(e) {
    e.preventDefault();
    console.log("LOGOIT");
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="#" onClick={this.onLogoutClick}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    );
    return (
      <div className="navbar">
        <nav className="nav__mobile" />
        <div className="container">
          <div className="navbar__inner">
            <Link to="/" className="navbar__logo ">
              <b>SuitsBae.</b>
            </Link>
            {/* <nav className="navbar__menu">
              {isAuthenticated ? authLinks : guestLinks}
            </nav> */}
            <div className="navbar__menu-mob">
              <a href="#" id="toggle">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    className=""
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStatetoProps,
  { logoutUser }
)(NavBar);
