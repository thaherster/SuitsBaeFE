import React, { Component } from "react";
import logo from "../../../images/tuxedo.svg";
class Footer extends Component {
  render() {
    return (
      <div className="footer footer--dark">
        <div className="container">
          <div className="footer__inner">
            <a href="/" className="footer__textLogo">
              <img className="center" src={logo} height="75" width="75" />
            </a>
            <div className="footer__data">
              <div className="footer__data__item">
                <div className="footer__row">
                  Created by{" "}
                  <a
                    href="https://twitter.com/thaherster"
                    target="_blank"
                    className="footer__link"
                  >
                    Thaher Majeed
                  </a>
                </div>
                <div className="footer__row">
                  Theme Created by{" "}
                  <a
                    href="https://twitter.com/ninalimpi"
                    target="_blank"
                    className="footer__link"
                  >
                    Katerina Limpitsouni
                  </a>
                </div>
                <div className="footer__row">
                  Theme Code/design by{" "}
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
                <div className="footer__row">Support Us</div>
                <div className="footer__row">
                  <a
                    href="https://www.buymeacoffee.com/suitsbae"
                    target="_blank"
                  >
                    <img
                      src="https://www.buymeacoffee.com/assets/img/custom_images/black_img.png"
                      alt="Buy Me A Coffee"
                    />
                  </a>
                </div>
              </div>
              <div className="footer__data__item">
                {/* <div className="footer__row">
                  <a
                    href="https://github.com/anges244/evie"
                    target="_blank"
                    className="footer__link"
                  >
                    KickStarter
                  </a>
                </div> */}
                <div className="footer__row">
                  <a
                    href="https://twitter.com/suitsbae"
                    target="_blank"
                    className="footer__link"
                  >
                    Twitter
                  </a>
                </div>
                {/* <div className="footer__row">
                  <a
                    href="https://www.facebook.com/suitsbae"
                    target="_blank"
                    className="footer__link"
                  >
                    Facebook
                  </a>
                </div> */}
                <div className="footer__row">
                  <a href="#" className="footer__link">
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
