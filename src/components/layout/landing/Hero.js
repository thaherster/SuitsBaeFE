import React, { Component } from "react";
import logo from "../../../images/tuxedo.svg";

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
                <h1 className="hero__title">Recognize yourself Online</h1>
                <p className="hero__text">
                  <b>SuitsBae.</b> is a free service for business executives,
                  developers, site owners and users. Suits Bae. help identify
                  you to other websites, or individuals. And yeah its all free.
                </p>
                {/* <a href="index.html" className="button button__accent">
                  Get Started
                </a> */}

                <span id="scrollToNext" class="scroll">
                  <a href="#" className="button hero__button">
                    Learn more
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
