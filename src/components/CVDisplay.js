import "../styles/CVDisplay.css";
import { Component } from "react";
import Button from "./Button";

// This is the CVDisplay component
// Props:
// this.props.user is the user object from Main's state
// this.props.handleSubmit is the onClick event listener from Main which toggles the display
export class CVDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let educationList = this.props.user.education.map((item, index) => (
      <div key={index} className="cv-info" id={item.id}>
        <div className="row">
          <span className="label">Institution: </span>
          <span className="school data">{item.school}</span>
        </div>
        <div className="row">
          <span className="label">Qualification: </span>
          <span className="qual data">{item.qual}</span>
        </div>
        <div className="row">
          <span className="label">Date: </span>
          <span className="edudate data">{item.date}</span>
        </div>
      </div>
    ));

    let workList = this.props.user.work.map((item, index) => (
      <div key={index} className="cv-info" id={item.id}>
        <div className="row">
          <div className="inner-row">
            <span className="label">Employer: </span>
            <span className="employer data">{item.name}</span>
          </div>
          <div className="inner-row">
            <span className="label">Started: </span>
            <span className="datestarted data">{item.start}</span>
          </div>
        </div>

        <div className="row">
          <div className="inner-row">
            <span className="label">Position: </span>
            <span className="pos data">{item.pos}</span>
          </div>
          <div className="inner-row">
            <span className="label">Ended: </span>
            <span className="dateended data">{item.end}</span>
          </div>
        </div>

        <div className="row">
          <span className="dutieslabel label">Duties: </span>
          <span className="role data">{item.role}</span>
        </div>
      </div>
    ));

    return (
      <div className="CVDisplay">
        <div className="cv-container">
          <div className="cv-about">
            <p className="cv-title">
              <span className="firstName">{this.props.user.firstName}</span>
              <span className="lastName">{this.props.user.lastName}</span>
            </p>
            <div className="cv-info">
              <div className="row">
                <span className="label">Email: </span>
                <span className="email data">{this.props.user.email}</span>
              </div>
              <div className="row">
                <span className="label">Phone: </span>
                <span className="phone data">{this.props.user.phone}</span>
              </div>
              <div className="row">
                <span className="label">Address: </span>
                <span className="address data">{this.props.user.address}</span>
              </div>
            </div>
          </div>

          <div className="cv-edu">
            <p className="cv-title">Education</p>
            {educationList}
          </div>

          <div className="cv-work">
            <p className="cv-title">Work</p>

            {workList}
          </div>
          <div className="cv-footer">
            This CV was generated at jcrachael.github.io/cv
          </div>
        </div>
        <Button type="button" value="Edit" onClick={this.props.handleSubmit} />
      </div>
    );
  }
}
