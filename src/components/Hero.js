import { Component } from "react";
import "../styles/Hero.css";

// This is the Hero component
// Props:
// this.props.form is true or false
class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let display;
    if (this.props.form) {
      display = (
        <>
          <p className="callout">Easy CV creation within minutes.</p>
          <p className="subtitle">
            Simply fill out the form below and click “Generate CV” to create
            your own personalised
            <span className="italics"> curriculum vitae</span>.
          </p>
        </>
      );
    } else {
      display = (
        <>
          <p className="callout">Your personalised CV, even better.</p>
          <p className="subtitle">
            Please review your personalised CV below. You can make changes to
            any section by clicking the edit button.
          </p>
        </>
      );
    }

    return <section className="hero">{display}</section>;
  }
}

export default Hero;
