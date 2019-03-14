import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__overlay hero__overlay--gradient" />
        <div className="hero__mask" />
        <div className="hero__inner">
          <div className="container">
            <div className="hero__content">
              <div className="hero__content__inner" id="navConverter">
                <h1 className="hero__title">
                  A production-ready theme for your projects
                </h1>
                <p className="hero__text">
                  Evie is an MIT licensed template bundled with a minimal style
                  guide to build websites faster. It is extemely lightweight,
                  customizable and works perfectly on modern browsers.
                </p>
                <a href="index.html" className="button button__accent">
                  Download Evie
                </a>
                <a href="index.html" className="button hero__button">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;