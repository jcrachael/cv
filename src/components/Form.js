import React, { Component } from "react";
import Button from "./Button";
import Fieldset from "./Fieldset";
import Hero from "./Hero";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Form">
        <Hero view="0" />
        <form>
          <Fieldset type="about" />
          <Fieldset type="edu" />
          <Fieldset type="work" />
          <Button
            type="submit"
            value="Generate CV"
            clickEvent={this.props.toggleView}
          />
        </form>
      </div>
    );
  }
}

export { Form };
