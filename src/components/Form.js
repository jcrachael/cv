import React, { Component } from "react";
import Button from "./Button";
import Fieldset from "./Fieldset";

// This is the Form component
// Props:
// this.props.handleChange is the handleChange event listener from Main
// this.props.handleSubmit is the handleSubmit event listener from Main
// this.props.user is the user Object from Main's state

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const types = [
      { id: 0, name: "about" },
      { id: 1, name: "education" },
      { id: 2, name: "work" },
    ];

    const listItems = types.map((type, id) => {
      return (
        <Fieldset
          key={id}
          type={type.name}
          handleChange={this.props.handleChange}
          handleEduChange={this.props.handleEduChange}
          handleWorkChange={this.props.handleWorkChange}
          user={this.props.user}
        />
      );
    });

    return (
      <div className="Form">
        <form>
          {listItems}
          <Button
            type="submit"
            value="Generate CV"
            onClick={this.props.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export { Form };
