import React, { Component } from "react";
import axios from "axios";

class CallToAction extends Component {
  constructor() {
    super();
    this.state = { email: "", errors: {} };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const oldUser = {
      email: this.state.email
    };
    console.log(oldUser);

    axios
      .post("api/users/subscribe", oldUser)
      .then(res => {
        console.log(res.data);
        const msg = { email: "Subscribed!" };
        this.setState({ errors: msg, email: "" });
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
        console.log(err.response.data);
      });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="cta cta--reverse">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">Subscribe</h2>
            <p className="cta__sub cta__sub--center">
              Grab the front seat for the production version and be the first
              one to use.
            </p>
            <form
              onSubmit={this.onSubmit}
              autoComplete="new-password"
              role="presentation"
              className="form"
            >
              <div>
                {errors.email && (
                  <small className="error ">{errors.email}</small>
                )}
              </div>
              <input name="email" className="fakefield" />
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                placeholder="you@example.com"
                onChange={this.onChange}
              />

              <button type="submit" className="button button__accent">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
