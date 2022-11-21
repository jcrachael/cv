import React, { Component } from "react";
import "../styles/Main.css";
import { Form } from "./Form";
import { CVDisplay } from "./CVDisplay";
import Hero from "./Hero";
import uniqid from "uniqid";

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
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleDeleteEdu = this.handleDeleteEdu.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
    this.state = {
      form: true,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        education: [{ id: uniqid(), school: "", qual: "", date: "" }],
        work: [
          { id: uniqid(), name: "", pos: "", start: "", end: "", role: "" },
        ],
      },
    };
  }

  // Form submit button event listener
  handleSubmit(e) {
    // Prevent the default form submission event
    e.preventDefault();
    // Toggle the current display state
    let newFormState = !this.state.form;
    let newUser = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      education: [{ id: uniqid(), school: "", qual: "", date: "" }],
      work: [{ id: uniqid(), name: "", pos: "", start: "", end: "", role: "" }],
    };
    if (newFormState) {
      this.setState({ form: newFormState, user: newUser });
    } else {
      this.setState({ form: newFormState });
    }
  }

  // Input change event listener for About you section of form
  handleChange(e) {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  }

  // Input change event listener for nested Education section
  handleEduChange(e) {
    let newEducation = this.state.user.education.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
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
    let newWork = this.state.user.work.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
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

  // Handle add education button click
  handleAddEducation() {
    this.setState({
      user: {
        ...this.state.user,
        education: [
          ...this.state.user.education,
          { id: uniqid(), school: "", qual: "", date: "" },
        ],
      },
    });
  }

  // Handle add work button click
  handleAddWork() {
    this.setState({
      user: {
        ...this.state.user,
        work: [
          ...this.state.user.work,
          { id: uniqid(), name: "", pos: "", start: "", end: "", role: "" },
        ],
      },
    });
  }

  // Handle delete education button click
  handleDeleteEdu(e) {
    let newEducation = this.state.user.education.filter(
      (item) => item.id !== e.target.parentElement.id
    );
    this.setState({
      user: {
        ...this.state.user,
        education: newEducation,
      },
    });
  }

  // Handle delete work button click
  handleDeleteWork(e) {
    let newWork = this.state.user.work.filter(
      (item) => item.id !== e.target.parentElement.id
    );
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
            handleAddEducation={this.handleAddEducation}
            handleAddWork={this.handleAddWork}
            handleDeleteEdu={this.handleDeleteEdu}
            handleDeleteWork={this.handleDeleteWork}
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
