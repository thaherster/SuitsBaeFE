import React, { Component } from "react";
import undraw_designer from "../../../images/undraw_designer.svg";
import undraw_responsive from "../../../images/undraw_responsive.svg";
import undraw_creation from "../../../images/undraw_creation.svg";

class Steps extends Component {
  render() {
    return (
      <div className="steps landing__section">
        <div className="container">
          <h2>Who can use Evie?</h2>
          <p>
            Here's who we can think of, but surely creative people will surprise
            us.
          </p>
        </div>
        <div className="container">
          <div className="steps__inner">
            <div className="step">
              <div className="step__media">
                <img src={undraw_designer} className="step__image" />
              </div>
              <h4>Programmers</h4>
              <p className="step__text">
                A landing page for your open source projects. Present your
                solution, easily create docs.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img src={undraw_responsive} className="step__image" />
              </div>
              <h4>Designers</h4>
              <p className="step__text">
                A website for your own freebies. Let the world download and use
                your artwork.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img src={undraw_creation} className="step__image" />
              </div>
              <h4>Makers</h4>
              <p className="step__text">
                A great starting point for your web application. Focus on your
                idea and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
