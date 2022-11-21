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
    const list = this.props.user.education.map((item, index) => (
      <EducationInput
        key={index}
        uniqID={item.id}
        handleChange={this.props.handleChange}
        handleDeleteEdu={this.props.handleDeleteEdu}
        user={this.props.user}
      />
    ));

    return (
      <div className="education-container">
        {list}
        <div className="add-more-edu-btn form-row">
          <div className="form-control">
            <Button
              type="button"
              value="Add"
              onClick={this.props.handleAddEducation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { EducationFieldset };
