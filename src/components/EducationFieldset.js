import { Component } from "react";
import EducationInput from "./EducationInput";

class EducationFieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edus: [
        { school: "", qual: "", date: "" },
        { school: "", qual: "", date: "" },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    let newEdu = { school: "", qual: "", date: "" };
    this.setState({
      edus: this.state.edus.concat(newEdu),
    });
  }

  render() {
    return (
      <fieldset className="education">
        <legend>Education</legend>
        {this.state.edus.map(function (edu, index) {
          if (index % 2 === 0) {
            return <EducationInput key={index} propID={index} />;
          } else {
            return <EducationInput key={index} propID={index} class="grey" />;
          }
        })}

        <div className="add-more-edu-btn form-row">
          <div className="form-control">
            <button id="addMoreEducationBtn" onClick={this.onClick}>
              Add more
            </button>
          </div>
        </div>
      </fieldset>
    );
  }
}

export { EducationFieldset };
