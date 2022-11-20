import { Component } from "react";
import WorkInput from "./WorkInput";
import Button from "./Button";

class WorkFieldset extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="work-container">
        <WorkInput />
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
