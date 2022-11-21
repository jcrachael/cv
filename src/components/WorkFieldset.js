import { Component } from "react";
import WorkInput from "./WorkInput";
import Button from "./Button";

// This is the Work Fieldset component
// Props:
// this.props.handleChange is the input change event handler from Main

class WorkFieldset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numEls = this.props.user.work.length;
    let listOfEls = [];
    for (let i = 1; i <= numEls; i++) {
      listOfEls.push(
        <WorkInput
          key={i}
          uniqID={i}
          handleChange={this.props.handleChange}
          user={this.props.user}
        />
      );
    }

    return (
      <div className="work-container">
        {listOfEls}
        <div className="add-more-work-btn form-row">
          <div className="form-control">
            <Button type="button" value="Add" />
          </div>
        </div>
      </div>
    );
  }
}

export { WorkFieldset };
