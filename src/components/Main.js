import React, { Component } from "react";
import "../styles/Main.css";

import { Form } from "./Form";
import CVDisplay from "./CVDisplay";

class Main extends Component {
  constructor() {
    super();
    this.getView = this.getView.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.state = { view: 0 };
    this.display = this.getView();
  }

  toggleView(e) {
    e.preventDefault();
    if (this.state.view == 0) {
      this.setState({ view: 1 });
    } else {
      this.setState({ view: 0 });
    }
    this.display = this.getView();
  }

  getView() {
    if (this.state.view == 1) {
      return <CVDisplay toggleView={this.toggleView} />;
    } else {
      return <Form toggleView={this.toggleView} />;
    }
  }

  render() {
    return <div className="Main">{this.display}</div>;
  }
}

export { Main };
