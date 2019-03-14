import React, { Component } from "react";
import Hero from "./Hero";
import HeroSub from "./HeroSub";
import Steps from "./Steps";
import ExpandedSections from "./ExpandedSections";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Hero />
        <HeroSub />
        <Steps />
        <ExpandedSections />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default Landing;
