/* eslint-disable react/prop-types */
import { Component } from "react";

// This is the Education Input component
// One or more can be shown on the screen
// They can be deleted
// Props:
// this.props.handleChange is the input onChange event handler from Main
// this.props.user is the user Object from Main's state

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educationinput" id={this.props.uniqID}>
        <div className="delete-icon" onClick={this.handleDelete}>
          &times;
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="school">Name of school/institute*</label>
            <input
              id="school"
              name="school"
              type="text"
              placeholder="School"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="qualification">Qualification*</label>
            <input
              id="qualification"
              type="text"
              placeholder="Qualification"
              onChange={this.props.handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="date">Date*</label>
            <input id="date" type="date" className="eduDate" required />
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInput;
