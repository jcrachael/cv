import { Component } from "react";
import "../styles/Hero.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.getView = this.getView.bind(this);
    this.display = this.getView();
  }

  getView() {
    if (this.props.view == "1") {
      return (
        <section className={this.props.view}>
          <p className="callout">Your personalised CV, even better.</p>
          <p className="subtitle">
            Please review your personalised CV below. You can make changes to
            any section by clicking the edit button.
          </p>
        </section>
      );
    } else {
      return (
        <section className={this.props.view}>
          <p className="callout">Easy CV creation within minutes.</p>
          <p className="subtitle">
            Simply fill out the form below and click “Generate CV” to create
            your own personalised
            <span className="italics"> curriculum vitae</span>.
          </p>
        </section>
      );
    }
  }

  render() {
    return <div className="hero">{this.display}</div>;
  }
}

export default Hero;
