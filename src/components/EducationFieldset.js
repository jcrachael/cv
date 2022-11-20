import { Component } from "react";
import Button from "./Button";
import EducationInput from "./EducationInput";

class EducationFieldset extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education-container">
        <EducationInput />
        <div className="add-more-edu-btn form-row">
          <div className="form-control">
            <Button type="button" value="Add" />
          </div>
        </div>
      </div>
    );
  }
}

export { EducationFieldset };
