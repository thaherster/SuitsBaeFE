import React, { Component } from "react";
import Hero from "./Hero";
import HeroSub from "./HeroSub";
import Steps from "./Steps";
import ExpandedSections from "./ExpandedSections";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import NavBar from "../dashboard/NavBar";

class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
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
