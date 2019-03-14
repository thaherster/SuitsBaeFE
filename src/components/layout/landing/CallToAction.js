import React, { Component } from "react";

class CallToAction extends Component {
  render() {
    return (
      <div className="cta cta--reverse">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">Get started now</h2>
            <p className="cta__sub cta__sub--center">
              Grab the production version and begin your project instantly.
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
