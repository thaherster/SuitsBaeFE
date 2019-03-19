import React, { Component } from "react";
import Content from "./Content";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import classnames from "classnames";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { view: "#avatar", errors: {} };
    this.onClickView = this.onClickView.bind(this);
  }
  onClickView(e) {
    e.preventDefault();
    console.log("change View");
    console.log(e.target.id);

    this.setState({ view: e.target.id });
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="app">
          <div className="container">
            <div className="app__inner">
              <div className="app__menu">
                <ul className="vMenu">
                  <li>
                    <a
                      href="#avatar"
                      id="#avatar"
                      onClick={this.onClickView}
                      className={classnames({
                        "vMenu--active": this.state.view === "#avatar"
                      })}
                    >
                      Avatar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resume"
                      id="#resume"
                      onClick={this.onClickView}
                      className={classnames({
                        "vMenu--active": this.state.view === "#resume"
                      })}
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      id="#settings"
                      onClick={this.onClickView}
                      className={classnames({
                        "vMenu--active": this.state.view === "#settings"
                      })}
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
              {(() => {
                switch (this.state.view) {
                  case "#avatar":
                    return <Content />;
                  case "#resume":
                    return null;
                  case "#settings":
                    return null;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStatetoProps,
  {}
)(Dashboard);
