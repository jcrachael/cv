import "../styles/CVDisplay.css";
import { Component } from "react";
import Button from "./Button";
import Hero from "./Hero";

export class CVDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CVDisplay">
        <Hero />
        <div className="cv-container">
          <div className="cv-about">
            <p className="cv-title">
              <span className="firstName">{this.props.user.firstname}</span>
              <span className="lastName">{this.props.user.surname}</span>
            </p>
            <div className="cv-info">
              <div className="row">
                <span className="label">Email: </span>
                <span className="email data">{this.props.user.email}</span>
              </div>
              <div className="row">
                <span className="label">Phone: </span>
                <span className="phone data">{this.props.user.tel}</span>
              </div>
              <div className="row">
                <span className="label">Address: </span>
                <span className="address data">{this.props.user.address}</span>
              </div>
            </div>
          </div>
          <div className="cv-edu">
            <p className="cv-title">Education</p>
            <div className="cv-info 0">
              <div className="row">
                <span className="label">Institution: </span>
                <span className="school data">
                  {this.props.user.education[0]["school"]}
                </span>
              </div>
              <div className="row">
                <span className="label">Qualification: </span>
                <span className="qual data">
                  {this.props.user.education[0]["qual"]}
                </span>
              </div>
              <div className="row">
                <span className="label">Date: </span>
                <span className="edudate data">
                  {this.props.user.education[0]["date"]}
                </span>
              </div>
            </div>
          </div>
          <div className="cv-work">
            <p className="cv-title">Work</p>
            <div className="cv-info 0">
              <div className="row">
                <div className="inner-row">
                  <span className="label">Employer: </span>
                  <span className="employer data">
                    {this.props.user.work[0]["employer"]}
                  </span>
                </div>
                <div className="inner-row">
                  <span className="label">Started: </span>
                  <span className="datestarted data">
                    {this.props.user.work[0]["started"]}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="inner-row">
                  <span className="label">Position: </span>
                  <span className="pos data">
                    {this.props.user.work[0]["pos"]}
                  </span>
                </div>
                <div className="inner-row">
                  <span className="label">Ended: </span>
                  <span className="dateended data">
                    {this.props.user.work[0]["ended"]}
                  </span>
                </div>
              </div>

              <div className="row">
                <span className="dutieslabel label">Duties: </span>
                <span className="role data">
                  {this.props.user.work[0]["role"]}
                </span>
              </div>
            </div>
          </div>
          <div className="cv-footer">
            This CV was generated at jcrachael.github.io/cv
          </div>
        </div>
        <Button type="button" value="Go back" />
      </div>
    );
  }
}
