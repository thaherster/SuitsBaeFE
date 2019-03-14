import React, { Component } from "react";
import Content from "./Content";

class Dashboard extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="app__inner">
            <div className="app__menu">
              <ul className="vMenu">
                <li>
                  <a href="#" className="vMenu--active">
                    Active page
                  </a>
                </li>
                <li>
                  <a href="#">Second page</a>
                </li>
                <li>
                  <a href="#">Third page</a>
                </li>
                <li>
                  <a href="#">Fourth page</a>
                </li>
                <li>
                  <a href="#">Fifth page</a>
                </li>
              </ul>
            </div>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
