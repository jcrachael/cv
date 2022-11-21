import { Component } from "react";
import Button from "./Button";
import EducationInput from "./EducationInput";

// This is the Education Fieldset component
// Props:
// this.props.handleChange is the input change event handler from Main
// this.props.user is the user Object from Main's state

class EducationFieldset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numEls = this.props.user.education.length;
    let listOfEls = [];
    for (let i = 1; i <= numEls; i++) {
      listOfEls.push(
        <EducationInput
          key={i}
          uniqID={i}
          handleChange={this.props.handleChange}
          user={this.props.user}
        />
      );
    }

    return (
      <div className="education-container">
        {listOfEls}
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
