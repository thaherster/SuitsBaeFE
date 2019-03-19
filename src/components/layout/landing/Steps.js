import React, { Component } from "react";
import undraw_designer from "../../../images/undraw_designer.svg";
import undraw_code_typing from "../../../images/undraw_code_typing.svg";
import undraw_business from "../../../images/undraw_business.svg";

class Steps extends Component {
  render() {
    return (
      <div className="steps landing__section">
        <div className="container">
          <h2>
            Who can use <b>SuitsBae.</b>?
          </h2>
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
              <h4>Professionals</h4>
              <p className="step__text">
                A public profile for your online presense. Present yourself to
                the world.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img src={undraw_code_typing} className="step__image" />
              </div>
              <h4>Programmers</h4>
              <p className="step__text">
                Save server storage space for avatars and resumes. Use{" "}
                <b>SuitsBae.</b>
                plugins or <b>SuitsBae.</b> APIs.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img src={undraw_business} className="step__image" />
              </div>
              <h4>Business Executives</h4>
              <p className="step__text">
                An easy way to exchange information while meeting new people.
                Focus on your networking.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
