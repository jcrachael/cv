import React, { Component } from "react";
import "../styles/Main.css";
import { Form } from "./Form";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        address: "",
        education: [{ id: 0, school: "", qual: "", date: "" }],
        work: [{ id: 0, name: "", pos: "", start: "", end: "", role: "" }],
      },
    };
  }

  render() {
    return (
      <div className="Main">
        <Form />
      </div>
    );
  }
}

export { Main };
