import React, { Component } from "react";
import Button from "./Button";
import Fieldset from "./Fieldset";
import Hero from "./Hero";

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Form">
        <Hero />
        <form>
          <Fieldset type="about" />
          <Fieldset type="edu" />
          <Fieldset type="work" />
          <Button type="submit" value="Generate CV" />
        </form>
      </div>
    );
  }
}

export { Form };
