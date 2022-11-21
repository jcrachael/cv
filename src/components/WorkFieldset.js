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
    const list = this.props.user.work.map((item, index) => (
      <WorkInput
        key={index}
        uniqID={item.id}
        handleChange={this.props.handleChange}
        handleDeleteWork={this.props.handleDeleteWork}
        user={this.props.user}
      />
    ));

    return (
      <div className="work-container">
        {list}
        <div className="add-more-work-btn form-row">
          <div className="form-control">
            <Button
              type="button"
              value="Add"
              onClick={this.props.handleAddWork}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { WorkFieldset };
