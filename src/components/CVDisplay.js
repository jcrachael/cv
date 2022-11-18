import "../styles/CVDisplay.css";
import { Component } from "react";
import Button from "./Button";
import Hero from "./Hero";

export default class CVDisplay extends Component {
  constructor(props) {
    super(props);
    this.cv = {
      firstname: "John",
      surname: "Smith",
      email: "john@example.com",
      tel: "+61 432 123 456",
      address: "123 Smith Street SMITHTOWN VIC 3000",
      edu: [
        {
          school: "Sample University",
          qual: "Bachelor of Arts",
          date: "21 June 2020",
        },
      ],
      work: [
        {
          employer: "Walmart",
          pos: "Duty Manager",
          started: "12 April 2012",
          ended: "27 December 2019",
          role: "Working cash register, assisting customers with enquiries, processing refunds, stocking shelves",
        },
      ],
    };
  }
  render() {
    return (
      <div className="CVDisplay">
        <Hero view="1" />
        <div className="cv-container">
          <div className="cv-about">
            <p className="cv-title">
              <span className="firstName">{this.cv.firstname}</span>
              <span className="lastName">{this.cv.surname}</span>
            </p>
            <div className="cv-info">
              <div className="row">
                <span className="label">Email: </span>
                <span className="email data">{this.cv.email}</span>
              </div>
              <div className="row">
                <span className="label">Phone: </span>
                <span className="phone data">{this.cv.tel}</span>
              </div>
              <div className="row">
                <span className="label">Address: </span>
                <span className="address data">{this.cv.address}</span>
              </div>
            </div>
          </div>
          <div className="cv-edu">
            <p className="cv-title">Education</p>
            <div className="cv-info 0">
              <div className="row">
                <span className="label">Institution: </span>
                <span className="school data">{this.cv.edu[0]["school"]}</span>
              </div>
              <div className="row">
                <span className="label">Qualification: </span>
                <span className="qual data">{this.cv.edu[0]["qual"]}</span>
              </div>
              <div className="row">
                <span className="label">Date: </span>
                <span className="edudate data">{this.cv.edu[0]["date"]}</span>
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
                    {this.cv.work[0]["employer"]}
                  </span>
                </div>
                <div className="inner-row">
                  <span className="label">Started: </span>
                  <span className="datestarted data">
                    {this.cv.work[0]["started"]}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="inner-row">
                  <span className="label">Position: </span>
                  <span className="pos data">{this.cv.work[0]["pos"]}</span>
                </div>
                <div className="inner-row">
                  <span className="label">Ended: </span>
                  <span className="dateended data">
                    {this.cv.work[0]["ended"]}
                  </span>
                </div>
              </div>

              <div className="row">
                <span className="dutieslabel label">Duties: </span>
                <span className="role data">{this.cv.work[0]["role"]}</span>
              </div>
            </div>
          </div>
          <div className="cv-footer">
            This CV was generated at jcrachael.github.io/cv
          </div>
        </div>
        <Button
          type="button"
          value="Go back"
          clickEvent={this.props.toggleView}
        />
      </div>
    );
  }
}
