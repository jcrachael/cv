/* eslint-disable react/prop-types */
import { Component } from "react";

class WorkInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id={this.props.propID} className={this.props.class}>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="employer">Employer name*</label>
            <input id="employer" type="text" placeholder="Employer" required />
          </div>
          <div className="form-control">
            <label htmlFor="position">Position title*</label>
            <input id="position" type="text" placeholder="Position" required />
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
              placeholder="Working cash register, assisting customers with enquiries, processing refunds, stocking shelves"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkInput;
