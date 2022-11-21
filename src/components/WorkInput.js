/* eslint-disable react/prop-types */
import { Component } from "react";

// This is the Work Input component
// Props:
// this.props.handleChange is the input onChange event handler from Main

class WorkInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="workinput" id={this.props.uniqID}>
        <div className="delete-icon">&times;</div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="employer">Employer name*</label>
            <input
              id="employer"
              type="text"
              placeholder="Employer"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="position">Position title*</label>
            <input
              id="position"
              type="text"
              placeholder="Position"
              onChange={this.props.handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="date">Date started*</label>
            <input id="dateStarted" type="date" required />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date ended*</label>
            <input id="dateEnded" type="date" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="role">Role description</label>
            <input
              id="role"
              type="text"
              className="role"
              placeholder="Working cash register, assisting customers with enquiries, processing refunds, stocking shelves"
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkInput;
