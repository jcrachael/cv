import React, { Component } from "react";
import "../styles/Main.css";
import { Form } from "./Form";
import { CVDisplay } from "./CVDisplay";
import Hero from "./Hero";

// This is the Main component

// State:
// this.state.form: if true, display Form, else display CVDisplay
// this.state.user is an object containing all the user's inputs from the form

// Event listeners:
// handleSubmit(e) handles the form submit button onClick event
// handleChange(e) handles the form inputs onChange events

class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.state = {
      form: true,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        education: [{ id: 0, school: "", qual: "", date: "" }],
        work: [{ id: 0, name: "", pos: "", start: "", end: "", role: "" }],
      },
    };
  }

  // Form submit button event listener
  handleSubmit(e) {
    // Prevent the default form submission event
    e.preventDefault();
    // Debug: console log
    console.log("Submit button clicked");
    // Toggle the current display state
    this.setState({ form: !this.state.form });
  }

  // Input change event listener for About you section of form
  handleChange(e) {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  }

  // Input change event listener for nested Education section
  handleEduChange(e) {
    let newEducation = this.state.user.education.map((item, index) => {
      if (index === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    this.setState({
      user: {
        ...this.state.user,
        education: newEducation,
      },
    });
  }

  // Input change event listener for nested Work section
  handleWorkChange(e) {
    let newWork = this.state.user.work.map((item, index) => {
      if (index === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    this.setState({
      user: {
        ...this.state.user,
        work: newWork,
      },
    });
  }

  render() {
    return (
      <div className="Main">
        <Hero form={this.state.form} />

        {this.state.form ? (
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleEduChange={this.handleEduChange}
            handleWorkChange={this.handleWorkChange}
            user={this.state.user}
          />
        ) : (
          <CVDisplay user={this.state.user} handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

export { Main };
