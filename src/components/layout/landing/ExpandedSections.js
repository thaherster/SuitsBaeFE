import React, { Component } from "react";
import undraw_avatar from "../../../images/undraw_avatar.svg";
import undraw_resume from "../../../images/undraw_resume.svg";
import undraw_meeting from "../../../images/undraw_meeting.svg";

class ExpandedSections extends Component {
  render() {
    return (
      <div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img src={undraw_avatar} className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">Global Avatar</h2>
                <p className="expanded__text">
                  You setup your crazy yet awesome avatar just once, and then
                  when you participate in any <b>SuitsBae.</b> enabled site,
                  your avatar image will automatically follow you there. Yes,
                  exactly like a Gravatar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img src={undraw_resume} className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">Globally Shared Resume</h2>
                <p className="expanded__text">
                  You upload your updated resume and apply to any
                  <b>SuitsBae.</b> enabled career page, your resume will
                  automatically follow you to the HR team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img src={undraw_meeting} className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">
                  Easily Exchange Contacts While Networking
                </h2>
                <p className="expanded__text">
                  Exchange your contacts instantly without a hassle with the
                  person you just met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandedSections;
