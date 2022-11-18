import { Component } from "react";
import { AboutFieldset } from "./AboutFieldset";
import { EducationFieldset } from "./EducationFieldset";
import { WorkFieldset } from "./WorkFieldset";

export default class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.getTitle = this.getTitle.bind(this);
    this.getChild = this.getChild.bind(this);
    this.title = this.getTitle();
    this.child = this.getChild();
  }

  getTitle() {
    if (this.props.type == "about") {
      return "About you";
    } else if (this.props.type == "edu") {
      return "Education";
    } else if (this.props.type == "work") {
      return "Work";
    } else {
      return this.props.type;
    }
  }

  getChild() {
    if (this.props.type == "about") {
      return <AboutFieldset />;
    } else if (this.props.type == "edu") {
      return <EducationFieldset />;
    } else if (this.props.type == "work") {
      return <WorkFieldset />;
    } else {
      return;
    }
  }

  render() {
    return (
      <fieldset className={this.props.type}>
        <legend>{this.title}</legend>
        {this.child}
      </fieldset>
    );
  }
}
