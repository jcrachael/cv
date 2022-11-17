import React, { Component } from "react";
import { AboutFieldset } from "./AboutFieldset";
import { EducationFieldset } from "./EducationFieldset";
import { WorkFieldset } from "./WorkFieldset";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
      education: {},
      work: {},
    };
  }
  render() {
    return (
      <form>
        <AboutFieldset />
        <EducationFieldset />
        <WorkFieldset />
        <input type="submit" value="Generate CV"></input>
      </form>
    );
  }
}

export { Form };
