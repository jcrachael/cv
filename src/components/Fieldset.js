import { Component } from "react";
import { AboutFieldset } from "./AboutFieldset";
import { EducationFieldset } from "./EducationFieldset";
import { WorkFieldset } from "./WorkFieldset";

// This is the Fieldset component
// Props:
// this.props.type is the type of fieldset (about, work or education)
// this.props.handleChange is the input onChange event listener from Main
// this.props.user is the user Object from Main's state

export default class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.getTitle = this.getTitle.bind(this);
    this.getChild = this.getChild.bind(this);
  }

  getTitle() {
    if (this.props.type == "about") {
      return "About you";
    } else if (this.props.type == "education") {
      return "Education";
    } else if (this.props.type == "work") {
      return "Work";
    } else {
      return this.props.type;
    }
  }

  getChild() {
    if (this.props.type == "about") {
      return (
        <AboutFieldset
          handleChange={this.props.handleChange}
          user={this.props.user}
        />
      );
    } else if (this.props.type == "education") {
      return (
        <EducationFieldset
          handleChange={this.props.handleEduChange}
          user={this.props.user}
        />
      );
    } else if (this.props.type == "work") {
      return (
        <WorkFieldset
          user={this.props.user}
          handleChange={this.props.handleWorkChange}
        />
      );
    } else {
      return;
    }
  }

  render() {
    const title = this.getTitle();
    const child = this.getChild();
    return (
      <fieldset className={this.props.type}>
        <legend>{title}</legend>
        {child}
      </fieldset>
    );
  }
}
