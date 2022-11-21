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
        <div className="delete-icon" onClick={this.props.handleDeleteWork}>
          &times;
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="name">Employer name*</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Employer"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="pos">Position title*</label>
            <input
              id="pos"
              name="pos"
              type="text"
              placeholder="Position"
              onChange={this.props.handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="start">Date started*</label>
            <input
              id="start"
              name="start"
              type="date"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="end">Date ended*</label>
            <input
              id="end"
              name="end"
              type="date"
              onChange={this.props.handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="role">Role description</label>
            <input
              id="role"
              type="text"
              name="role"
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
