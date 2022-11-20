/* eslint-disable react/prop-types */
import { Component } from "react";

class EducationInput extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="educationinput">
        <div className="delete-icon" onClick={this.handleDelete}>
          &times;
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="school">Name of school/institute*</label>
            <input id="school" type="text" placeholder="School" required />
          </div>
          <div className="form-control">
            <label htmlFor="qualification">Qualification*</label>
            <input
              id="qualification"
              type="text"
              placeholder="Qualification"
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
