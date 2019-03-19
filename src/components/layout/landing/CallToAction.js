import React, { Component } from "react";
import { Link } from "react-router-dom";

class CallToAction extends Component {
  render() {
    return (
      <div className="cta cta--reverse">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">Subscribe</h2>
            <p className="cta__sub cta__sub--center">
              Grab the front seat for the production version and be the first
              one to use.
            </p>
            <a href="#" className="button button__accent">
              Download Evie
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
