import { Component } from "react";
import "../styles/Hero.css";

class Hero extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="hero">
        <p className="callout">Easy CV creation within minutes.</p>
        <p className="subtitle">
          Simply fill out the form below and click “Generate CV” to create your
          own personalised
          <span className="italics"> curriculum vitae</span>.
        </p>
      </section>
    );
  }
}

export default Hero;
