import React, { Component } from "react";
import "../styles/Main.css";
import Hero from "./Hero";
import { Form } from "./Form";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Main">
        <Hero />
        <Form />
      </div>
    );
  }
}

export { Main };
