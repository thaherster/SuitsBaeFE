import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer footer--dark">
        <div className="container">
          <div className="footer__inner">
            <a href="index.html" className="footer__textLogo">
              Evie theme
            </a>
            <div className="footer__data">
              <div className="footer__data__item">
                <div className="footer__row">
                  Created by{" "}
                  <a
                    href="https://twitter.com/ninalimpi"
                    target="_blank"
                    className="footer__link"
                  >
                    Katerina Limpitsouni
                  </a>
                </div>
                <div className="footer__row">
                  Code/design by{" "}
                  <a
                    href="https://twitter.com/anges244"
                    target="_blank"
                    className="footer__link"
                  >
                    Aggelos Gesoulis
                  </a>
                </div>
              </div>
              <div className="footer__data__item">
                <div className="footer__row">
                  Created for{" "}
                  <a
                    href="https://undraw.co"
                    target="_blank"
                    className="footer__link"
                  >
                    unDraw
                  </a>
                </div>
              </div>
              <div className="footer__data__item">
                <div className="footer__row">
                  <a
                    href="https://github.com/anges244/evie"
                    target="_blank"
                    className="footer__link"
                  >
                    GitHub
                  </a>
                </div>
                <div className="footer__row">
                  <a
                    href="https://twitter.com/undraw_co"
                    target="_blank"
                    className="footer__link"
                  >
                    Twitter
                  </a>
                </div>
                <div className="footer__row">
                  <a
                    href="https://www.facebook.com/undraw.co/"
                    target="_blank"
                    className="footer__link"
                  >
                    Facebook
                  </a>
                </div>
                <div className="footer__row">
                  <a href="./additional.html" className="footer__link">
                    MIT license
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
