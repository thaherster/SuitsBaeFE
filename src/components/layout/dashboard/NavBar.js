import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="nav__mobile" />
        <div className="container">
          <div className="navbar__inner">
            <a href="index.html" className="navbar__logo">
              Logo
            </a>
            <nav className="navbar__menu">
              <ul>
                <li>
                  <a href="index.html">Option</a>
                </li>
                <li>
                  <a href="index.html">Option 2</a>
                </li>
              </ul>
            </nav>
            <div className="navbar__menu-mob">
              <a href="index.html" id="toggle">
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
